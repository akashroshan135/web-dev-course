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
