const express = require('express')
const router = express.Router()
const User = require('../models/User')



//ALL NOTES ROUTE
router.get("/users", (req, res) => {
  User.find({}).then(users => res.json(users))
})

//FIND-ONE ROUTE
router.get("/notes/:id", (req, res) => {
  User.findOne({_id: req.params.id}).then(thisUser => res.json(thisUser))
})


module.exports = router