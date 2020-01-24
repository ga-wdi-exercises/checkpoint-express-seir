const express = require("express");
const router = express.Router();
const notes = require("../models/Note");

router.get("/", (req, res) => {
  notes.find({}).then(notes => res.json(notes));
});

router.post("/", (req, res) => {
  let newNotes = req.body;
  console.log("this is new Notes", newNotes);
  notes.create(newnotes).then(
    notes.find({}).then(notes => res.json(notes))
  );
});

router.put("/:noteId", (req, res) => {
  let updatenote = req.body;
  let noteId = req.params.gifId;
  notes.findOneAndUpdate({ _id: noteId }, updatenote, { new: true }).then(
    () => {
      notes.find({}).then(Model => res.json(notes));
    }
  );
});

router.delete("/:noteId", (req, res) => {
  let updatenote = req.body;
  let noteId = req.params.gifId;
  note.findOneAndUpdate({ _id: noteId }, updatenote, { new: true }).then(
    () => {
      notes.find({}).then(note => res.json(note));
    }
  );
});

module.exports = notes;

