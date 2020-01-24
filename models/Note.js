const mongoose = require('../db/connection')
const Schema = mongoose.Schema;
const User = require('./User.js')

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {User}
})

module.exports = mongoose.model('Note', noteSchema)
