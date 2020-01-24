const mongoose = require('../db/connection');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    notes: [
        {
            ref: "Note"
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;