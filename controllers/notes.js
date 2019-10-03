const express = require("express");
const router = express.Router();

const Notes = require("../models/Note");

// GET '/notes' which return a list of notes
router.get("/", (req, res) => {
    Notes.find({}).then(notes => res.json(notes));
  });

// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id
router.get("/:id", (req, res) => {
    Notes.findOne({ _id: req.params.id })
    .then(note => res.json(note))
  });

module.exports = router;
