const express = require("express");
const app = express();

const noteController = require("./controllers/notes");
const userController = require("./controllers/users");

app.use("/notes", noteController);
app.use("/users", userController);

app.get("/", (req, res) => {
  res.redirect("/notes");
});

app.listen(3000, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:
module.exports = app;
