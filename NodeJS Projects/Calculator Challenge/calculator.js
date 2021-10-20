const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);

	var result = num1 + num2;

	res.send(`The result of the calculation is ${result}`);
});

app.get("/bmicalculator", (req, res) => {
	res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);

	var bmi = Math.floor(weight / height ** 2);

	res.send(`Your BMI is ${bmi}`);
});
