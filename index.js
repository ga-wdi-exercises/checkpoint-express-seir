const express = require('express')
const parser = require("body-parser")
const Users = require('./controllers/users')
const Notes = require('./controllers/notes')
const app = express()


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/notes/')
})

app.use('/notes/', Notes);
app.use('/users/', Users);

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
