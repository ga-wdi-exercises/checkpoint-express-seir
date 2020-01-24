const mongoose = require("../db/connection");
const UserSchema = mongoose.Schema({
  username: String,
  email: String,
  notes: [
    {
      ref: "notes",
      type: mongoose.Schema.Types.ObjectId
    }
  ]

});

const User = mongoose.model("User", UserSchema);

module.exports = User;