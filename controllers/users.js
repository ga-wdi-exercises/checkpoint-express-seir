const User = require("../models/User");

module.exports = {
  index: (req, res) => {
    User.find({}).then(users => {
      res.json(users);
    });
  },
  showUsers: (req, res) => {
    User.find({})
      .then(users => {
        res.json(users)
      })
  },
  showUser: (req, res) => {
    User.find({username: req.params.username})
      .then(user => {
        res.json(user)
      })
  },
};
