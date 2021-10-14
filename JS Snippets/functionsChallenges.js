// Challenge 1

function lifeInWeeks(age) {
	var remainingAge = 90 - age;
	var days = remainingAge * 365;
	var weeks = remainingAge * 52;
	var months = remainingAge * 12;
	console.log(
		"You have " +
			days +
			" days, " +
			weeks +
			" weeks, and " +
			months +
			" months left."
	);
}

lifeInWeeks(56);

// Challenge 2

function bmiCalculator(weight, height) {
	return Math.floor(weight / height ** 2);
}

bmiCalculator(65, 1.8);
