const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/", (req, res) => {
    User.find({}).then(user => res.json(user))
})

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    const userId = req.params.id
    User.find({ id: userId }).then(user => res.json(user))
})

module.exports = router