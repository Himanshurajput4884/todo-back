const express = require('express')
const app=express()
const port=5001
const taskRoutes = require('./routes/tasks') 
const connection = require("./db/connection");
require('dotenv').config()

var cors = require('cors');
app.use(cors());

app.use(express.json())

app.use(taskRoutes);

app.listen(port, ()=>{
    console.log("Server is running at 5001");
})