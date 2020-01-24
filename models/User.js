const mongoose = require('../db/connection')
const Note = require('./Note')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  notes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Note
  }
})

module.exports = mongoose.model('User', userSchema)
