const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const {dbconnect} = require('./utils/db.js')
const app = express()

const todoRoute = require('./router/todo.js')

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
app.use(express.json());

app.use("/",(req,res)=>{
    res.send("Hello")
})

app.use("/todos",todoRoute)

dbconnect().then(()=>{
    app.listen(3001,()=>{
        console.log(`server running at port ${process.env.PORT}`)
    })
})