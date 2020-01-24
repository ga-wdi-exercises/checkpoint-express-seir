const express = require("express")
const User = require("../models/User");
const router = express.Router()

router.get('/', (req, res) => {
    User.find({}).then(users => res.json(users))
})

router.get('/:id', (req, res) => {
    User.find({ _id: req.params._id }).then(users =>
        res.json(users)
    );
});

module.exports = router