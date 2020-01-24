const express = require('express')
const router = express.Router()

const User = require("../models/User")
const Note = require("../models/Note")

router.get("/", (req, res) => {
  User.find({}).then(all => res.json(all))
})
router.get("/:id", (req, res) => {
  User.findOne({ id: req.params._id })
    .then(each => res.json(each))
})
