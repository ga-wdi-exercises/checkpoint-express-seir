const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost/notes-checkpoint"
mongoose
    .connect( mongoURI, {useNewUrlParser: true})
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
    .catch(error => console.log('Connection failed!', error))

mongoose.Promise = Promise;

module.exports = mongoose;
