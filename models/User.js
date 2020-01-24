const mongoose = require('../db/connection')
const Schema = mongoose.Schema;
const Note = require('./Note')


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [Note]
})

module.exports = mongoose.model('User', userSchema)
