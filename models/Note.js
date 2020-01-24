const mongoose = require('../db/connection')

console.log("hello world")
const noteSchema = new mongoose.Schema({})

module.exports = mongoose.model('Note', noteSchema)
