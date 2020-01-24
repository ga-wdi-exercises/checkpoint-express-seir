const express = require('express')
const parser = require('body-parser')
const app = express()
const cors = require("cors")
const notesController = require("./controllers/notes")
const usersController = require("./controllers/users")


app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use(cors())

app.use("/notes/", notesController)
app.use("/users/", usersController)

app.listen(3000, () => console.log('app is running on 3000'))

// DO NOT REMOVE THIS LINE:
module.exports = app
