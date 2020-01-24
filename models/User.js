const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new mongoose.Schema({
    username: String,
    email: String,
    notes: [
        {
        ref: "Note",
        type: Schema.Types.ObjectId
    }
]
})

module.exports = mongoose.model('User', User)
