const mongoose = require("../db/connection");

const UsersSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [
        {
            ref: "Note",
            type: mongoose.Schema.Types.Array
        }
    ]
})

module.exports = mongoose.model('Users', userSchema)