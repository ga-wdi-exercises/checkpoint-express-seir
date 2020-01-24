const mongoose = require('../db/connection')

const userSchema = mongoose.Schema({
  username: String,
  email: String
})

module.exports = mongoose.model('User', userSchema)


