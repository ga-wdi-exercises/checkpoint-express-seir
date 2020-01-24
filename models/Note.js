const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        ref: "User",
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('Note', noteSchema)
