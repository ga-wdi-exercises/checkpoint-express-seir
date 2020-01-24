const express = require('express');
const app = express();
const parser = require("body-parser");
// const modelRouter = require("./controller/controller");
// const cors = require('cors')



app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

// app.use("/gifs/", modelRouter);
// app.use(cors())

app.listen(8000, () => {
  console.log('they see me rollin on port 8000...')
})



// DO NOT REMOVE THIS LINE:
module.exports = app
