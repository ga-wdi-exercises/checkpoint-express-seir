const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const users = require('./controllers/users')
const notes = require('./controllers/notes')

app.get("/", (req, res) => {
    res.redirect("/users");
});

app.use(bodyParser.json())

app.use('/users', users)
app.use('/notes', notes)

app.listen(5000, () => console.log('app is running on 5000'))

// DO NOT REMOVE THIS LINE:
module.exports = app
