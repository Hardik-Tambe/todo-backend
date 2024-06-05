
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { dbconnect } = require('./utils/db.js');
const todoRoute = require('./router/todo.js');
const app = express();

const corsOptions = {
    origin: "https://react-todo-hardik.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/todos", todoRoute);

app.use("/",(req,res)=>{
    res.send("Hello")
})


dbconnect().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`server running at port ${process.env.PORT || 3001}`);
    });
});
