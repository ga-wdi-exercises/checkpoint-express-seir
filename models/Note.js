const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({})

module.exports = mongoose.model('Note', noteSchema)

const noteSchema = mongoose.Schema({
    title: String,
    body: String,
    author: [
      {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
      }
    ]
  });
  
  const User = mongoose.model("Note", UserSchema);
  
  module.exports = Note;