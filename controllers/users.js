const express = require("express");
const router = express.Router();

const Users = require("../models/User");

// GET '/users' which will return a list of all users
router.get("/", (req, res) => {
    Users.find({}).then(users => res.json(users));
  });

// GET '/users/:someParameter which will return a single user by id. NOTE see previous note.
router.get("/:id", (req, res) => {
    Users.findOne({ _id: req.params.id })
    .then(user => res.json(user))
  });

module.exports = router;