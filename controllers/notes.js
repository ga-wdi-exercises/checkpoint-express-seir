const express = require('express')
const router = express.Router()
const Note = require('../models/Note')


//INDEX ROUTE
router.get("/", (req, res) => {
  Note.find({}).then(notes => {
    res.redirect('/notes')
  })
})

//ALL NOTES ROUTE
router.get("/notes", (req, res) => {
  Note.find({}).then(notes => res.json(notes))
})

//FIND-ONE ROUTE
router.get("/notes/:id", (req, res) => {
  Note.findOne({_id: req.params.id}).then(thisNote => res.json(thisNote))
})


module.exports = router