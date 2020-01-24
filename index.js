const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hitting default route')
  })

const userController = require('./controllers/users')
const noteController = require('./controllers/notes')

app.listen(6000, () => console.log("Running on port 6000!"))
