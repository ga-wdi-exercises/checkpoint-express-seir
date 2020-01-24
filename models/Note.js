const mongoose = require("../db/connection");

const NotesSchema = new mongoose.Schema({
  title: String,
  author: String,
  picture: String,
  genre: String,
  isbn: String,
});
// instantiate the model, calling it "Bookmark" and with the schema we just made
const Notes = mongoose.model("Notes", NotesSchema);
// export the newly created model
module.exports = Notes
