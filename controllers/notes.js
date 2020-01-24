const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const Note = require('../models/Note.js')

router.get('/', (req, res) => {
    Note.find({})
    .then(allNotes => res.json(allNotes))
})

router.get('/:title', (req, res) => {
    Note.find({ title: req.params.title})
    .then(oneNotes => res.json(oneNotes))
})

module.exports = router;