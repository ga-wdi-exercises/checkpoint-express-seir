const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    author: Object,
    body: String
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
