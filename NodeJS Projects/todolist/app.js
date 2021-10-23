const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;
let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	const today = date.getDate();
	res.render("list", { listTitle: today, Items: items });
});

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", Items: workItems });
});

app.post("/", (req, res) => {
	const item = req.body.newItem;

	if (req.body.listBtn == "Work List") {
		workItems.push(item);
		res.redirect("/work");
	} else {
		items.push(item);
		res.redirect("/");
	}
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
