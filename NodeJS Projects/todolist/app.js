const express = require("express");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect Mongoose
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect("mongodb://localhost:27017/todoDB");
}

const tasksSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Task field is empty"],
	},
});
const Task = mongoose.model("Task", tasksSchema);

function addDefaultItems() {
	const task1 = new Task({
		name: "Welcome to you todo list!",
	});
	const task2 = new Task({
		name: "Hit the + button to add a new item",
	});
	const task3 = new Task({
		name: "<-- Hit this to mark as done",
	});
	const defaultTasks = [task1, task2, task3];
	Task.insertMany(defaultTasks, (err) => {
		if (err) return console.log(err);
		console.log("Default items inserted");
	});
}

app.get("/", (req, res) => {
	const today = date.getDate();
	Task.find((err, tasks) => {
		if (err) return console.error(err);
		if (tasks.length === 0) {
			addDefaultItems();
			res.redirect("/");
		} else {
			res.render("list", { listTitle: today, Items: tasks });
		}
	});
});

app.get("/work", (req, res) => {
	res.render("list", { listTitle: "Work List", Items: workItems });
});

app.post("/", (req, res) => {
	const item = req.body.newItem;

	if (req.body.listBtn == "Work List") {
		// workItems.push(item);
		res.redirect("/work");
	} else {
		const taskItem = new Task({ name: item });
		taskItem.save((err) => {
			if (err) return console.error(err);
			console.log("Task Added Successfully");
		});
		res.redirect("/");
	}
});

app.post("/checked", (req, res) => {
	const item = req.body.checkbox;

	if (req.body.listBtn == "Work List") {
		// workItems.push(item);
		res.redirect("/work");
	} else {
		Task.findOneAndDelete(item, (err) => {
			if (err) return console.error(err);
			console.log("Deleted Item Successfully");
		});
		res.redirect("/");
	}
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
