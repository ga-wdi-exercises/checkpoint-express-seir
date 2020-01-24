const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String
})

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [noteSchema]
})

module.exports = mongoose.model('User', userSchema)
