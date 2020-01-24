const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const noteController = require("./controllers/notes");
const userController = require("./controllers/users");
app.use(cors());
app.get("/", (req, res) => {
res.send("this is the default route");
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/notes/", noteController);
app.use("/users/", userController);

app.listen(3002, () => console.log("app is running"));

// DO NOT REMOVE THIS LINE:


module.exports = app;
