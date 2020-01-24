const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notes");

router.get("/", notesController.index);
router.get("/notes", notesController.showNotes);
router.get("/notes/:title", notesController.showNote);


module.exports = router;