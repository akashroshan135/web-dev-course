const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb://localhost:27017/wikiDB";

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// connect Mongoose
main().catch((err) => console.log(err));
async function main() {
	await mongoose.connect(uri);
}

const articlesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title field is empty"],
	},
	content: {
		type: String,
		required: [true, "Content field is empty"],
	},
});
const Article = mongoose.model("Article", articlesSchema);

app.get("/", (req, res) => res.send("Server is running"));

app.get("/articles", (req, res) => {
	Article.find((err, articles) => {
		if (err) return console.error(err);
		res.send(articles);
	});
});

app.post("/articles", (req, res) => {
	const articleItem = new Article({
		title: req.query.title,
		content: req.query.content,
	});
	articleItem.save((err) => {
		if (err) return res.send(err);
		res.send("Article Added Successfully");
	});
});

app.delete("/articles", (req, res) => {
	Article.deleteMany((err) => {
		if (err) return res.send(err);
		res.send("All Articles Deleted Successfully");
	});
});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
