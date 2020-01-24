const express = require('express')
const parser = require("body-parser");
const app = express()
const cors = require('cors')
const employeeController = require("./controllers/employee");
// const usersController = require("./controllers/users");

// interprets key value pairs in URLs
app.use(parser.urlencoded({ extended: true }));
// converts a json string to the an object and attaches it to req.body
 app.use(parser.json());
 app.use(cors())
 app.use("/", employeeController);
 //app.use("/data/employeeD/", employeeController);


app.get('/', (req,res) => {
    res.send('hitting default route')
  })


// // interprets key value pairs in URLs
// app.use(parser.urlencoded({ extended: true }));

// // converts a json string to the an object and attaches it to req.body
// app.use(parser.json());

// app.get('/', (req,res) => {
//   res.send('hitting default route')
// })

// app.use("/api/bookmarks/", bookmarksController);
// app.use("/api/users/", usersController);

app.listen(8080, () => {
  console.log('local host 8080...')
})
