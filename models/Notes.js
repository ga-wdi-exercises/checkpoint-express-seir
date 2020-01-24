const mongoose = require('../db/connection')

const notesSchema = new mongoose.Schema({
    note: {
        title: String,
        body: String,
        author: [
            {
                ref: "User",
                type: mongoose.Schema.Types.String
            }
        ]
    } 
 });

module.exports = mongoose.model('Notes', noteSchema)
