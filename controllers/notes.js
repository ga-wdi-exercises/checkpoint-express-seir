const express = require("express")
const router = express.Router()

const Note = require("../models/Note")

router.get('/', (req, res) => {
    Note.find().then(notes => res.json(notes))
})

router.get('/:id', (req, res) => {
    Note.findOne({ _id: res.params.id }).then(note => res.json(note))
})

router.post('/', (req, res) => {
    Note.create(req.body).then(note => res.json(note))
})

module.exports = router