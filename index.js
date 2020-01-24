const express = require('express')
const app = express()
const parser = require('body-parser')


const noteController = require('./controllers/notes')
const userController = require('./controllers/users')
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use('/notes', noteController)
app.use('/user', userController)

app.get("/", (req, res) => {
    res.redirect("/");
  });

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
