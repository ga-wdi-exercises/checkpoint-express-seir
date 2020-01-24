const express = require("express");
const router = express.Router();

const Notes = require("../models/Note");

router.get("/", (req, res) => {
  Notes.find({}).then(note => res.json(note));
});

router.get("/:id", (req, res) => {
  Notes.findOne({ _id: req.params.id }).then(note =>
    res.json(note)
  );
});

module.exports = router;
