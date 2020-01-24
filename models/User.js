const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    // notes: [noteSchema]
})

module.exports = mongoose.model('User', userSchema)
