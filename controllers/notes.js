const express = require("express")
const router = express.Router()
const Note = require("../models/Note")
const User = require("../models/User")


router.get("/", (req, res) => {
    Note.find({}).then(() => {
        res.redirect('/notes')
      })
})

router.get("/notes", (req, res) => {
    Note.find({}).then(notes => res.json(notes))
})

router.put("/:id", (req, res) => {
    // console.log(req.params.id)
    Note.findOneAndUpdate({_id:req.params.id}, req.body, { new: true })
    .then(() => {Note.find({}).then(notes => res.json(notes))})
})