const express = require("express")
const router = express.Router()
const Models = require("../models/Note.js");

router.get('/', (req, res) => {
Models.find({}).then(notes => res.json(notes));
})

