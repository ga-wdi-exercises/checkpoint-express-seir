const express = require('express')
const router = express.Router()
const noteController = require("../controllers/notes")
router.get('/', noteController.get)
router.get('/notes', noteController.get)
router.get('/notes/:id', noteController.get)
router.get('/users', noteController.get)
router.get('/users/:id', noteController.get)



module.exports = router