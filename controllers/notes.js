const express = require("express")
const router = express.Router()
const Note= require("../models/Note")

router.get("/", (req, res) => {
    res.redirect("hitting notes")

    Note.find({}).then(notes => res.json(notes));
  });


//return a list of notes
router.get("/notes", (req, res) => {
  console.log('hitting notes')
    // res.send("hitting notes")

    Note.find({}).then(notes => res.json(notes));
  });

router.get("/notes:id", (req, res) => {
    // res.send("hitting notes by id")

    Note.find({_id: req.params.id}).then(notes => res.json(notes));
  });



module.exports = router