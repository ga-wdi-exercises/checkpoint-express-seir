const mongoose = require('./connection')
const Note = require('../models/Note')
const noteData = require("./notes")
const userData = require("./users")


Note.deleteMany({}).then(() => {
    Note.collection.insert(noteData)
    .then(notes => {
        console.log(notes)
    })
    .catch(err => {
        console.log(err)
    })
})