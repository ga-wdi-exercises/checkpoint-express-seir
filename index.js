const express = require('express')
const parser = require('body-parser')
const app = express()

const Notes = require("./controllers/notes")
const Users = require("./controllers/users")

app.use(parser.urlencoded({extended: true}))


app.use(parser.json())


app.get('/', (req, res) =>{
  res.send('hitting default route')
})

app.use("/notes", Notes);
app.use("/users", Users);



app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
