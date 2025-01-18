const express = require('express');
const app=express()

app.get("/",(req,res)=>{
    res.send("it a get request . it is HOME")
})

module.exports=app;