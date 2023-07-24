const express = require('express')
const app=express()
const port=5001
const taskRoutes = require('./routes/tasks') 
const connection = require("./db/connection");
const cookieParser = require("cookie-parser");
require('dotenv').config()

var cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000", "https://todo-front-rho.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(express.json())
app.use(cookieParser());
app.use(taskRoutes);

app.listen(port, ()=>{
    console.log("Server is running at 5001");
})