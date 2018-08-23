const mongoose = require("mongoose");

// /Articles Schema
const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;