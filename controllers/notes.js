const express = require("express")
const Note = require("../models/Note");
const router = express.Router()

router.get('/', (req, res) => {
    Note.find({}).then(notes => res.json(notes))
})

router.get('/:id', (req, res) => {
    Note.find({ _id: req.params._id }).then(notes =>
        res.json(notes)
    );
});


module.exports = router