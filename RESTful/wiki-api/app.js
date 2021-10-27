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

/////////////////////////////// Requests for all articles ///////////////////////////////

app.route("/articles")
	.get((req, res) => {
		Article.find((err, articles) => {
			if (err) return res.send(err);
			res.send(articles);
		});
	})
	.post((req, res) => {
		const articleItem = new Article({
			title: req.query.title,
			content: req.query.content,
		});
		articleItem.save((err) => {
			if (err) return res.send(err);
			res.send("Article Added Successfully");
		});
	})
	.delete((req, res) => {
		Article.deleteMany((err) => {
			if (err) return res.send(err);
			res.send("All Articles Deleted Successfully");
		});
	});

/////////////////////////////// Requests for one article ///////////////////////////////

app.route("/articles/:title")
	.get((req, res) => {
		Article.findOne({ title: req.params.title }, (err, article) => {
			if (err) return res.send(err);
			if (article) return res.send(article);
			res.send("No article matching title found");
		});
	})
	.put((req, res) => {
		Article.replaceOne(
			{ title: req.params.title },
			{ title: req.query.title, content: req.query.content },
			{ overwrite: true },
			(err) => {
				if (err) return res.send(err);
				res.send("Article Updated Successfully");
			}
		);
	})
	.patch((req, res) => {
		Article.findOneAndUpdate(
			{ title: req.params.title },
			{ title: req.query.title, content: req.query.content },
			(err) => {
				if (err) return res.send(err);
				res.send("Article Updated Successfully");
			}
		);
	})
	.delete((req, res) => {
		Article.deleteOne({ title: req.params.title }, (err) => {
			if (err) return res.send(err);
			res.send("Article Deleted Successfully");
		});
	});

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
