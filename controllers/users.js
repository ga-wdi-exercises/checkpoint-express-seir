const Users = require("../models/User");
const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  Notes.find({}).then(users => {
    res.json(users);
  });
});

router.get("/users/:userId", (req, res) => {
  Users.find({ _id: req.params.userId }).then(user => res.json(user));
});

module.exports = router;
