const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const User = require('../models/User.js')

router.get('/', (req, res) => {
    User.find({})
    .then(allUsers => res.json(allUsers))
})

router.get('/:name', (req, res) => {
    Note.find({ name: req.params.name})
    .then(oneName => res.json(oneName))
})

module.exports = router;