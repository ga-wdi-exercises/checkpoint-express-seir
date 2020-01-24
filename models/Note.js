const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: [{
    ref: 'Note',
    type: mongoose.Schema.Types.ObjectId
  }]
})

module.exports = mongoose.model('Note', noteSchema)
