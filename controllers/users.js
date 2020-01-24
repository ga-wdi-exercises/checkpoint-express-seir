const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});

router.get('/:id', (req, res) => {
    User.find().then(user => res.json(user));
})