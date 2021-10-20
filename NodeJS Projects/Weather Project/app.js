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
			console.log(weatherData.weather[0].description);
			// res.send(weatherData);
		});
	});

	res.send("Server is running");
});
