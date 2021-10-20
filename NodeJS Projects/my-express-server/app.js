const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/contact", (req, res) => {
	res.send("Contact me at @akashroshan135 on twitter");
});

app.get("/about", (req, res) => {
	res.send("I make stuff");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
