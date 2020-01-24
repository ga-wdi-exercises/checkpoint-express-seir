const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({

title: String,
body: String,

pull: [
    {
        ref: 'author',
        type: mongoose.Schema.Types.ObjectId
    }
]

})

const noteSchema = mongoose.models("User", noteSchema);

module.exports = mongoose.model('Note', noteSchema)
