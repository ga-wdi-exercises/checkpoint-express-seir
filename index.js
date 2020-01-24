const express = require('express')
const app = express()

const parser = require("body-parser");
const cors = require("cors");

const Note = require('./controllers/notes')
const User = require('./controllers/users')


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(cors());

app.use('/', Note)
app.use('/users', User)

app.listen(4000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
