const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  release_year: Number,
  genre: String,
});

//Export the model
module.exports = mongoose.model("Book", bookSchema);
