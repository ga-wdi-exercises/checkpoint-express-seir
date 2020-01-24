const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  title: String,
  author: String,
  picture: String,
  genre: String,
  isbn: String,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model("User", UserSchema);
// export the newly created model
module.exports = User