const express = require("express")
const router = express.Router()
const User = require("../models/User");

// GET '/users' which will return a list of all users
router.get("/user", (req, res) => {
    User.find({ user: req.params.user }).then(user =>
      res.json(user)
    );
  });

// GET '/users/:someParameter which will return a single user by id.
router.get("/user:_id", (req, res) => {
    User.find({ _id: req.params._id }).then(user =>
      res.json(user)
    );
  });

module.exports = router