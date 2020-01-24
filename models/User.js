const mongoose = require('../db/connection')
const Note = require('./Note')

const userSchema = new mongoose.Schema({
  usename: String,
  email: String,
  notes: [{
    ref: "User",
    type: mongoose.Schema.Types.ObjectId
  }]
})

module.exports = mongoose.model('User', userSchema)
