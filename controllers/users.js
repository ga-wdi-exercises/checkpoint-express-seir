const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Users = require("../models/Users");

router.get("/users", (req, res) => {
    User.find({}).then(users => res.json(users));
})

router.get("users/:userid", (req, res) => {
    User.findOne({id: req.params.userid}).then(user => res.json(user)); 
} )
module.exports = router