const connectToMongo = require("./config/db");
const express = require("express");

require('dotenv').config()

// connecting to the mongoDB
connectToMongo();

const app = express();

// adding middleware to use json
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
   })


// listening at PORT
app.listen(process.env.PORT, () => {
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})