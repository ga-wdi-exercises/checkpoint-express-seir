const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const app = require("../index");

router.get("/notes", (req, res) => {
  Note.find({}).then(note => res.json(note));
});

router.get("/notes/:id", (req, res) => {
  Note.findOne({ _id: req.params.id }).then(note => res.json(note));
});

module.exports = router;
