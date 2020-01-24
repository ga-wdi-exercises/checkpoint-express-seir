const mongoose = require("../db/connection");
const User = require("./User");
const app = require("../index");

const noteSchema = new mongoose.Schema({
  title: String,
  author: {User},
  body: String
});

module.exports = mongoose.model("Note", noteSchema);
