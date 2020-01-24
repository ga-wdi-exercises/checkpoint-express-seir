const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const userController = require("./controllers/users");
const notesController = require("./controllers/notes");

const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(require('./routes/erin'))
app.use(parser.json());
app.use(cors());
app.use("/", userController);
app.use("/", notesController);


app.listen(3000, () => console.log('app is running'))


// DO NOT REMOVE THIS LINE:
module.exports = app
