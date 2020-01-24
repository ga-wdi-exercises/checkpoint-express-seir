const mongoose = require("../db/connection");
const Note = require("./Note");
const app = require("../index.js");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  notes: Note.schema.obj
});

module.exports = mongoose.model("User", userSchema);
