const express = require("express");
const router = express.Router();
const Models = require("../models/User.js");

router.get("/", (req, res) => {
    Models.find({}).then(users => res.json(users));
  });

  router.get("/User/:id", (req, res) => {
    Models.find({}).then(users => res.json(users));
  });