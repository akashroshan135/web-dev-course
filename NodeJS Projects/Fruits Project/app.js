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

const fruitItem = new Fruit({
	name: "Apple",
	rating: 5,
	review: "Awesome!",
});

fruitItem.save();

// // Challenge
// const personSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number,
// });
// const Person = mongoose.model("Persons", personSchema);

// const personItem = new Person({
// 	name: "Akash",
// 	age: 8,
// });

// personItem.save((err) => {
// 	if (err) return console.error(err);
// 	console.log("Document inserted succussfully!");
// });

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

// Fruit.find((err, fruits) => {
// 	if (err) return console.error(err);
// 	fruits.forEach((fruit) => {
// 		console.log(fruit.name);
// 	});
// });

// Allows node to terminate app using ctrl + c
process.on("SIGINT", function () {
	process.exit(0);
});
