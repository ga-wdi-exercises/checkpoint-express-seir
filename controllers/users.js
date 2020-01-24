const express = require("express")
const router = express.Router()
const User= require("../models/User")


//return a list of notes
router.get("/users", (req, res) => {
    // res.send("hitting users")
    // console.log('hitting users')

    User.find({}).then(users => res.json(user));
  });

//return a single user by id
router.get("/users:id", (req, res) => {
    res.send("hitting users by id")

    User.find({_id: req.params.id}).then(user => res.json(user));
    });





module.exports = router