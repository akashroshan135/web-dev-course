const express = require("express");

const app = express();
const port = 3000;
var items = ["Buy food", "Cook food", "Eat food"];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	var today = new Date().toLocaleDateString("en-US", {
		weekday: "long",
	});

	res.render("list", { kindOfDay: today, newItems: items });
});

app.post("/", (req, res) => {
	var item = req.body.newItem;
	items.push(item);
	res.redirect("/");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
