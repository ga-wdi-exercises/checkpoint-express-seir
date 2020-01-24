const express = require("express");
const router = express.Router();
const userController = require("../controllers/notes");

router.get("/users", userController.showUsers);
router.get("/users/:username", userController.showUser);

module.exports = router;