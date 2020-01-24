const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', (req, res) => {
    User.find({}).then(users => {
        res.json(users)
    })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
        res.json(user)
    })
})

module.exports = router