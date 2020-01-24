const Notes = require("../models/Note");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/notes");
});

router.get("/notes", (req, res) => {
  Notes.find({}).then(notes => {
    res.json(notes);
  });
});

router.get("/notes/:noteId", (req, res) => {
  Notes.find({ _id: req.params.noteId }).then(note => res.json(note));
});

module.exports = router;
