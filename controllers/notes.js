// require the mongoose package from the connection pool
const mongoose = require("../db/connection");

// make a new schema with 3 properties, and assign it to a variable
const NotesSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: [
    {
      ref: "users",
      type: mongoose.Schema.Types.ObjectId
    }
  ]

});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const Notes = mongoose.model("Notes", NotesSchema);

// export the newly created model
module.exports = Notes;