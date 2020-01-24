
const Note = require('../models/Note');

const noteData = require('./seedData.json');


Mern.deleteMany({}).then(() => {
  Note.collection.insert(noteData)
    .then(myNote => {
      console.log(myNote)
    })
    .catch(err => {
      console.log(err)
    })
})
