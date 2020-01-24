const mongoose = require('../db/connection.js')
const express = require('express');
const parser = require("body-parser")
const server = express();

const notesController = require('./controllers/notes.js')
const usersController = require('./controllers/users.js')

server.use(parser.urlencoded({ extended: true }));
server.use(parser.json());

server.get('/', (req, res) => {
    res.redirect("/notes");
});

server.use('./controllers/users.js', usersController)
server.use('./controllers/notes.js', notesController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
