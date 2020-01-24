const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes-checkpoint", {useNewUrlParser: true})
.then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
.catch(error => console.log('Connection failed!', error))

mongoose.Promise = Promise;

module.exports = mongoose;
