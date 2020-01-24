const express = require("express");
const app = express();

const notesController = require("./controllers/notes");
const usersController = require("./controllers/users");

app.get("/", (req, res) => {
  res.redirect("/notes");
});

app.use("/notes", notesController);
app.use("/users", usersController);
app.use("/notes/:noteId", notesController);
app.use("/users/:userId", usersController);

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
