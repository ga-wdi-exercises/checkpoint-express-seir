const Note = require('../models/Note')
const User = require('../models/User')
const seedData = require('./seedData')

User.deleteMany({}).then(() => {
    User.collection.insert(seedData)
        .then(user => {
            console.log(user)
            process.exit()
        })
        .catch(err => {
            console.log(err)
            process.exit()
    })
})

Note.deleteMany({}).then(() => {
    Note.collection.insert(seedData)
        .then(Note => {
            console.log(Note)
            process.exit()
        })
        .catch(err => {
            console.log(err)
            process.exit()
    })
})