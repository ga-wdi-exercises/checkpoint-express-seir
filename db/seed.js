const Notes = require('../models/note')
const User = require('../models/user')
const notesData = require('./notesData.json')
const userData = require('./usersData.json')

Notes.remove({})
Notes.collection.insert(notesData)
    .then(notes => {
        console.log(notes)
        process.exit()
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })


User.remove({})
User.collection.insert(userData)
    .then(user => {
        console.log(user)
        process.exit()
    })
    .catch(err => {
        console.log(err)
        process.exit()
    })