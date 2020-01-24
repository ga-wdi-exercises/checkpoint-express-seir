const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    // author: [userSchema]
})

module.exports = mongoose.model('Note', noteSchema)
