const Note = require('../models/Note');
const User = require('../models/User');

let noteController = {
    get: (req, res) => {
        Note.find({}).then(note => res.json(note));
      },

};

module.exports = noteController;