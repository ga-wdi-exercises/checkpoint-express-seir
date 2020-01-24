const express = require("express")
const router = express.Router()
const Note = require("../models/Note")

router.get("/", (req, res) => {
    Note.find({}).then(note => res.json(note))
})

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    const noteId = req.params.id
    Note.findOne({ _id: noteId }).then(note => res.json(note))
})

module.exports = router