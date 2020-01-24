const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
  username: String,
  body: String,
  notes: [
    {
      type: Schema.type.ObjectId,
      ref: "Note"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
