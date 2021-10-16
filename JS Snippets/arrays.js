// Guest list program

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var getName = prompt("What is your name?");
if (guestList.includes(getName)) {
	console.log("Welcome!!!");
} else {
	console.log("Sorry, maybe next time");
}

// FizzBuzz problem (My solution)

function fizzBuzz(limit) {
	for (let index = 1; index <= limit; index++) {
		var output = "";
		if (index % 3 == 0) output.concat(output, "Fizz");
		if (index % 5 == 0) output.concat(output, "Buzz");
		if (output == "") output = index;
		console.log(output);
	}
}
fizzBuzz(100);

// FizzBuzz problem (while loop)

var output = [];
var count = 1;
function fizzBuzz() {
	while (count <= 100) {
		if (count % 3 == 0 && count % 5) output.push("FizzBuzz");
		else if (count % 3 == 0) output.push("Fizz");
		else if (count % 5 == 0) output.push("Buzz");
		else output.push(count);
		count++;
	}
	console.log(output);
}
fizzBuzz();

// FizzBuzz problem (for loop)

var output = [];
function fizzBuzz() {
	for (let index = 1; index <= 10; index++) {
		if (index % 3 == 0 && index % 5) output.push("FizzBuzz");
		else if (index % 3 == 0) output.push("Fizz");
		else if (index % 5 == 0) output.push("Buzz");
		else output.push(index);
	}
	console.log(output);
}
fizzBuzz();
