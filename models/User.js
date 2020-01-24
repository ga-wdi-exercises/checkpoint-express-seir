const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({})

module.exports = mongoose.model('User', userSchema)

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    notes: [
      {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
      }
    ]
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;