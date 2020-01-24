const express = require("express")
const router = express.Router()
const Note = require("../models/Note")
const User = require("../models/User")


router.get("/users", (req, res) => {
    User.find({}).then(users => res.json(users))
})

router.put("/:id", (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(() => {User.find({}).then(isers => res.json(users))
    });
})