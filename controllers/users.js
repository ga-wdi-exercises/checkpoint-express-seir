const express = require("express");
const router = express.Router();
const user = require("../models/User");

router.get("/", (req, res) => {
  user.find({}).then(user => res.json(user));
});

router.post("/", (req, res) => {
  let newModels = req.body;
  console.log("this is new Model", newModels);
  Models.create(newModels).then(
    Models.find({}).then(Models => res.json(Models))
  );
});

router.put("/:modelId", (req, res) => {
  let updateModel = req.body;
  let modelId = req.params.gifId;
  Models.findOneAndUpdate({ _id: modelId }, updateModel, { new: true }).then(
    () => {
      Models.find({}).then(Model => res.json(Model));
    }
  );
});

router.delete("/:modelId", (req, res) => {
  let updateModel = req.body;
  let modelId = req.params.gifId;
  Models.findOneAndUpdate({ _id: modelId }, updateModel, { new: true }).then(
    () => {
      Models.find({}).then(Model => res.json(Model));
    }
  );
});

module.exports = users;
