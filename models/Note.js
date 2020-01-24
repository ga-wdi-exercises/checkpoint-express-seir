const mongoose = require("../db/connection");

const Note = new mongoose.Schema({
  title: String,
  body: String,
  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = mongoose.model("Note", Note);
