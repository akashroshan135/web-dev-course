const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);

app.get("/", (req, res) => {
	const url =
		"https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=d885b96130728699de8a2dba5f5a47ab&units=metric";

	https.get(url, (response) => {
		response.on("data", (data) => {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const description = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

			res.write(
				`<h1>The temparature in Bangalore is ${temp} degrees Celcius.</h1>`
			);
			res.write("<br />");
			res.write(`<h3>The weather is currently ${description}</h3>`);
			res.write(`<img src=${imageURL} alt="weather image">`);

			res.send();
		});
	});
});
