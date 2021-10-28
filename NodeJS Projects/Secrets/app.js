require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;
const uri = "mongodb://localhost:27017/userDB";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect Mongoose
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(uri);
}

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
});
// userSchema.plugin(encrypt, {
// 	secret: process.env.ENCRYPT_KEY,
// 	encryptedFields: ["password"],
// });
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
	res.render("home");
});

app.route("/login")
	.get((req, res) => {
		res.render("login");
	})
	.post((req, res) => {
		const userEmail = req.body.username;
		const userPassword = req.body.password;
		User.findOne({ email: userEmail }, (err, user) => {
			if (err) return console.log(err);
			if (!user) return console.log("User not found");
			bcrypt.compare(userPassword, user.password, (err, result) => {
				if (err) return console.log(err);
				if (result) res.render("secrets");
				else res.send("Wrong Password");
			});
		});
	});

app.route("/register")
	.get((req, res) => {
		res.render("register");
	})
	.post((req, res) => {
		bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
			if (err) return console.log(err);
			const newUser = new User({
				email: req.body.username,
				password: hash,
			});
			newUser.save((err) => {
				if (err) return console.log(err);
				res.render("secrets");
			});
		});
	});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
