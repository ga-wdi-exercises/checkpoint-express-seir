const express = require('express');
const app = express();
const db = require('./db/connection');
notesController = require("./controllers/notes")

app.get('/', (req, res) => {
    res.redirect("/notes");
});


app.use("/notes", notesController);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
