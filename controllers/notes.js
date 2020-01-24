const express = require('express')
const router = express.Router()

const Note = require('../models/Note.js')
const User = require("../models/User")

router.get("/", (req, res) => {
  Note.find({}).then(all => res.json(all))
})
router.get("/:id", (req, res) => {
  Note.findOne({ id: req.params._id })
    .then(each => res.json(each))
})