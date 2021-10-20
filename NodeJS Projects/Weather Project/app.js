require("dotenv").config();
const express = require("express");
const https = require("https");

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
	const query = req.body.cityName;
	const apiKey = process.env.API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

	https.get(url, (response) => {
		response.on("data", (data) => {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const description = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

			res.write(
				`<h1>The temparature in ${query} is ${temp} degrees Celcius.</h1>`
			);
			res.write("<br />");
			res.write(`<h3>The weather is currently ${description}</h3>`);
			res.write(`<img src=${imageURL} alt="weather image">`);

			res.send();
		});
	});
});
