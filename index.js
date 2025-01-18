const express = require('express');
const app = express();

//load config from env file

require("dotenv").config();
const port = process.env.port || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todo");

//mount or append the todo API routes
app.use("/h",todoRoutes);

app.listen(port,()=>{
    console.log(`Server started succesfully at ${port}`);
})

//connect to the database

const dbConnect = require('./config/database');
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h2>HOMEPAGE</h2>`)
})