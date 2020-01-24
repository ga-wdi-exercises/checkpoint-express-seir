const express = require('express');
const app = express();
const parser = require("body-parser");

const notesController = require("./controllers/notes");
const usersController = require("./controllers/users");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/api/notes/", notesController);
app.use("/api/users/", usersController);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app