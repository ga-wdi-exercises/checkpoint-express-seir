const mongoose = require('../db/connection')
const User = require("./User");

const noteSchema = new mongoose.Schema({
    title: String,
    body: String,

    author: [User]
});

module.exports = mongoose.model('Note', noteSchema);
