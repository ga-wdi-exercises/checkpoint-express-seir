const express = require('express');
const notesController = require('./controllers/notes');
const usersController = require('./controllers/users');

const app = express();

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
