const express = require("express");
const router = express.Router();
const User = require("../models/User");
const app = require("../index");

router.get("/users", (req, res) => {
  User.find({}).then(user => res.json(user));
});

router.get("/users/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => res.json(user));
});

module.exports = router;
