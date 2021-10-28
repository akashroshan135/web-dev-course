require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

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
		// cookie: { secure: true },
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
	googleId: String,
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
			clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/auth/google/secrets",
		},
		function (accessToken, refreshToken, profile, cb) {
			console.log(profile);
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		}
	)
);
passport.serializeUser(function (user, done) {
	done(null, user.id);
});
passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

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

app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] })
);

app.get(
	"/auth/google/secrets",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		res.redirect("/secrets");
	}
);

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
