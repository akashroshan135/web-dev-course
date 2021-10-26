const express = require("express");
const mongoose = require("mongoose");
var _ = require("lodash");
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

const listSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Task field is empty"],
	},
	items: [tasksSchema],
});
const List = mongoose.model("List", listSchema);

// Default items
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

app.get("/", (req, res) => {
	Task.find((err, tasks) => {
		if (err) return console.error(err);
		if (tasks.length === 0) {
			Task.insertMany(defaultTasks, (err) => {
				if (err) return console.log(err);
				console.log("Default items inserted");
			});
			res.redirect("/");
		} else {
			res.render("list", { listTitle: "Today", Items: tasks });
		}
	});
});

app.get("/:customListName", (req, res) => {
	const customListName = _.capitalize(req.params.customListName);
	List.findOne({ name: customListName }, (err, foundList) => {
		if (err) return console.log(err);
		if (!foundList) {
			// Creates new list
			const listItem = new List({
				name: customListName,
				items: defaultTasks,
			});
			listItem.save((err) => {
				if (err) return console.error(err);
				console.log("List Added Successfully");
			});
			res.redirect(`/${customListName}`);
		} else {
			// shows existing list
			res.render("list", {
				listTitle: foundList.name,
				Items: foundList.items,
			});
		}
	});
});

app.post("/", (req, res) => {
	const item = req.body.newItem;
	const listName = _.capitalize(req.body.listBtn);
	const taskItem = new Task({ name: item });

	if (listName === "Today") {
		taskItem.save((err) => {
			if (err) return console.error(err);
			console.log("Task Added Successfully");
		});
		res.redirect("/");
	} else {
		List.findOne({ name: listName }, (err, foundList) => {
			if (err) return console.log(err);
			foundList.items.push(taskItem);
			foundList.save((err) => {
				if (err) return console.error(err);
				console.log(
					`Task Added Successfully to ${foundList.name} list`
				);
			});
		});
		res.redirect(`/${listName}`);
	}
});

app.post("/checked", (req, res) => {
	const listName = _.capitalize(req.body.listName);
	const taskItemId = req.body.checkbox;

	if (listName === "Today") {
		Task.findOneAndDelete(taskItemId, (err) => {
			if (err) return console.error(err);
			console.log("Deleted Item Successfully");
		});
		res.redirect("/");
	} else {
		List.findOneAndUpdate(
			{ name: listName },
			{ $pull: { items: { _id: taskItemId } } },
			(err) => {
				if (err) return console.log(err);
				res.redirect(`/${listName}`);
			}
		);
	}
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
