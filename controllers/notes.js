const Note = require("../models/Note");

module.exports = {
    index: (req, res) => {
        res.redirect("/notes");
     },

     showNotes: (req, res) => {
        Note.find({})
          .then(notes => {
            res.json(notes)
          })
      },

      showNote: (req, res) => {
        Note.find({title: req.params.title})
          .then(note => {
            res.json(note)
          })
      },

};

