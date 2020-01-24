const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// GET '/' which should redirect to `/notes'
router.get("/", (req, res) => {
    Note.find({}).then(note => res.json(note));
});

// GET '/notes' which return a list of notes
router.get("/notes", (req, res) => {
    Note.find({ notes: req.params.notes }).then(note =>
      res.json(note)
    );
  });

// GET '/notes/:someParameter' where :someParameter grabs a single Note from the database by id. NOTE You can name :someParameter whatever you want
router.get("/notes:title", (req, res) => {
    Note.find({ title: req.params.title }).then(note =>
      res.json(note)
    );
  });

module.exports = router