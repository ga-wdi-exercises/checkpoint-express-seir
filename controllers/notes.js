const express = require("express")
const router = express.Router()
const Notes = require("../models/Notes");

router.get("/", (req, res) => {
    res.redirect("/notes")
})
router.get("/notes", (req, res) => {
    Notes.find({}).then(notes => res.json(notes));
})
router.get("/notes/:id", (req, res) => {
    Notes.findOne({id: req.params.id}).then(note => res.json(note));
})
module.exports = router