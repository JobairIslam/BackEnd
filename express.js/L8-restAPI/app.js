const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
const usersRouter = require('./routes/users.route');


const uuid = require('uuid');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.send("hello world")
});

app.use(usersRouter)

app.use((req,res,next)=>{
    res.status(404).json(
        {
            message: "not found"
        }
    )
})

app.use((err,req,res,next)=>{
    res.status(500).json(
        {
            message: "something went wrong"
        }
    )
})

module.exports = app;