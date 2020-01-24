const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/users", (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId }).then(user => {
    res.json(user);
  });
});

module.exports = router
