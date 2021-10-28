require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb://localhost:27017/userDB";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

// connect Mongoose
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(uri);
}

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
	res.render("home");
});

app.route("/login")
	.get((req, res) => {
		res.render("login");
	})
	.post(passport.authenticate("local"), (req, res) => {
		res.redirect("/secrets");
	});

app.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

app.route("/register")
	.get((req, res) => {
		res.render("register");
	})
	.post((req, res) => {
		User.register(
			{ username: req.body.username },
			req.body.password,
			(err, user) => {
				if (err) {
					console.log(err);
					return res.redirect("/register");
				}
				passport.authenticate("local")(req, res, () =>
					res.redirect("/secrets")
				);
			}
		);
	});

app.get("/secrets", (req, res) => {
	if (req.isAuthenticated()) res.render("secrets");
	else res.redirect("/login");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
