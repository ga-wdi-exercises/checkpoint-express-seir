const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/', (req, res) => {
    Note.find().then(notes => res.json(notes));
});

