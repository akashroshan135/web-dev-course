require("dotenv").config();
const express = require("express");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();
const port = 3000;
const views = __dirname + "/views/";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Setting up mailchimp to add members
mailchimp.setConfig({
	apiKey: process.env.API_KEY,
	server: "us5",
});

app.get("/", (req, res) => {
	res.sendFile(views + "/signup.html");
});

app.post("/", (req, res) => {
	const listId = process.env.LIST_ID;

	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;

	// Setting up mailchimp function to add new member
	async function run() {
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: "subscribed",
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName,
			},
		});
		res.sendFile(views + "/success.html");
		console.log(
			`Contact added as an audience member. The contact's id is ${response.id}.`
		);
	}

	run().catch((e) => {
		console.log(e);
		res.sendFile(views + "/failure.html");
	});
});

app.post("/failure", (req, res) => {
	res.redirect("/");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
