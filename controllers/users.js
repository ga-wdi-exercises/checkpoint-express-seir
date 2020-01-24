const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.get('/', (req, res) => {
    User.find().then(user => res.json(user))
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    User.findOne({ _id: req.params.id}).then(user => res.json(user))
})

router.post('/', (req, res) => {
    User.create(req.body).then(user => res.json(user))
})

module.exports = router