// require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const views = __dirname + "/views/";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(views + "/signup.html");
});

app.post("/", (req, res) => {
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;

	console.log(firstName, lastName, email);

	// res.sendFile(views + "/success.html");
	// res.sendFile(views + "/failure.html");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
