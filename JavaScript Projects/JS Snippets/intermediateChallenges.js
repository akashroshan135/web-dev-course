// BMI Calculator Advanced (IF/ELSE)

function bmiCalculator(weight, height) {
	var bmi = weight / (height * height);
	if (bmi > 24.9) {
		return "Your BMI is " + bmi + ", so you are overweight.";
	}
	if (bmi > 18.5) {
		return "Your BMI is " + bmi + ", so you have a normal weight.";
	}
	return "Your BMI is " + bmi + ", so you are underweight.";
}

// Leap Year Challenge Exercise

function isLeap(year) {
	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		return "Leap year.";
	}
	return "Not leap year.";
}

// Who's Buying Lunch? Code Challenge

function whosPaying(names) {
	var randomPerson = Math.floor(Math.random() * names.length);
	return names[randomPerson] + " is going to buy lunch today!";
}

// 99 Bottles Challenge

function bottles99() {
	var bottles = 99;
	while (bottles > 0) {
		if (bottles == 1) {
			console.log(
				"1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall."
			);
			console.log(
				"No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
			);
		}
		console.log(
			bottles +
				" bottles of beer on the wall, " +
				bottles +
				" bottles of beer. Take one down and pass it around, " +
				--bottles +
				" bottles of beer on the wall."
		);
	}
}
bottles99();

// Fibonacci Excercise

function fibonacciGenerator(n) {
	var output;
	if (n == 1) output = [0];
	else {
		output = [0, 1];
		for (let index = 2; index < n; index++)
			output.push(output[index - 1] + output[index - 2]);
	}
	return output;
}
