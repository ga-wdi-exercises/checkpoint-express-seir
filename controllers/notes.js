const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

router.get("/", (req, res) => {
  Note.find({}).then(allNotes => {
    res.json(allNotes);
  });
});

router.get("/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(note => {
    res.json(note);
  });
});

module.exports = router;
