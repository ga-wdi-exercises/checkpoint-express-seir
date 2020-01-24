const express = require('express')
const parser = require('body-parser')
const app = express()
const usersController = require("./controllers/users")
const notesController = require("./controllers/notes")

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.get("/", (req, res) => {
    res.redirect("/notes")
})

app.use("/users/", usersController)
app.use("/notes/", notesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
