const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: [
        {
            ref: "User"
        }
    ]
});


const Note = mongoose.model('Note', noteSchema);

module.exports = Note;