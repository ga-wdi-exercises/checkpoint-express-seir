const express = require("express");
const router = express.Router();

const Note = require('../models/Note')

router.get("/", (req, res) => {
  res.redirect('/notes')
});

router.get("/notes", (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes);
  });
});

router.get("/:noteId", (req, res) => {
  const noteId = req.params.noteId
  Note.findOne({ _id: noteId }).then(note => {
    res.json(note)
  })
});

module.exports = router;