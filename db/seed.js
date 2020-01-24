const Note = require('../models/Note')
const User = require('../models/User')

//const seedData = require("./seedData.json")

Note.deleteMany({})
    .then(() => {
        console.log("Deleted Notes")
        User.deleteMany({})
            .then(() => {
                console.log("Deleted Users")

                User.create({
                    username: "person1",
                    email: "person1 @email.com"
                }).then(user => {
                    Note.create({
                        title: "my note",
                        body: "note info",
                        author: user.id
                    }).then(note => {
                        user.notes.push(note)
                        user.save
                        console.log("Created person1")
                    })
                })
            })
    })

