const express = require("express");
const router = express.Router();

const Users = require("../models/User");

router.get("/", (req, res) => {
  Users.find({}).then(user => res.json(user));
});

router.get("/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }).then(user => res.json(user));
});

module.exports = router;
