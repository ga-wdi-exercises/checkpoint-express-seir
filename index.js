const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const bookmarksController = require("./controllers/notes");
const usersController = require("./controllers/users");

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.use(parser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/api/users");
});

app.use("/api/users/", bookmarksController);

app.use("/api/notes/", usersController);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
