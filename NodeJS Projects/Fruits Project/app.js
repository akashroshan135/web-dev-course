const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name field is empty"],
	},
	rating: {
		type: Number,
		min: 1,
		max: 10,
	},
	review: String,
});
const Fruit = mongoose.model("Fruits", fruitSchema);

const pineapple = new Fruit({
	name: "Pineapple",
	rating: 9,
	review: "great fruit",
});

pineapple.save((err) => {
	if (err) return console.error(err);
	console.log("Document inserted succussfully!");
});

// Challenge
const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favFruit: fruitSchema,
});
const Person = mongoose.model("Persons", personSchema);

const personItem = new Person({
	name: "John",
	age: 25,
	favFruit: pineapple,
});

personItem.save((err) => {
	if (err) return console.error(err);
	console.log("Document inserted succussfully!");
});

// const kiwi = new Fruit({
// 	name: "Kiwi",
// 	rating: 9,
// 	review: "Great!",
// });

// const orange = new Fruit({
// 	name: "Orange",
// 	rating: 7,
// 	review: "Great!",
// });

// Fruit.insertMany([kiwi, orange], (err) => {
// 	if (err) return console.error(err);
// 	console.log("Documents inserted succussfully!");
// });

// Fruit.updateOne(
// 	{ _id: "6176c013daf137631cdee1d1" },
// 	{ name: "Banana" },
// 	(err) => {
// 		if (err) return console.error(err);
// 		console.log("Updated data successfully");
// 	}
// );

// Fruit.deleteOne({ name: "Banana" }, (err) => {
// 	if (err) return console.error(err);
// 	console.log("Deleted data successfully");
// });

// Fruit.find((err, fruits) => {
// 	if (err) return console.error(err);
// 	fruits.forEach((fruit) => {
// 		console.log(fruit.name);
// 	});
// });

// Person.deleteMany({ name: "Akash" }, (err) => {
// 	if (err) return console.error(err);
// 	console.log("Deleted data successfully");
// });

// Person.find((err, persons) => {
// 	if (err) return console.error(err);
// 	persons.forEach((person) => {
// 		console.log(person.name);
// 	});
// });

Person.updateOne(
	{ _id: "6176b9ac161e15d2d9d2c43f" },
	{ favFruit: pineapple },
	(err) => {
		if (err) return console.error(err);
		console.log("Updated data successfully");
	}
);

Person.find((err, persons) => {
	if (err) return console.error(err);
	console.log(persons);
});

// Allows node to terminate app using ctrl + c
process.on("SIGINT", function () {
	process.exit(0);
});
