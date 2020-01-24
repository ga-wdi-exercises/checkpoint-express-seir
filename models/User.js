const mongoose = require("../db/connection");

const User = new mongoose.Schema({
  username: String,
  email: String,
  notes: [
    {
      ref: "Note",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("User", User);
