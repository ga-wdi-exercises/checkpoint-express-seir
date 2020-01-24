const express = require('express')

const noteController = require('./controllers/notes.js')
const userController = require('./controllers/users.js')

const app = express()

app.get('/', (req, res) => {
  res.redirect('/notes')
})
app.use('/notes', noteController)
app.use('/users', userController)

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
