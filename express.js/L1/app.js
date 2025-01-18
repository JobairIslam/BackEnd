const express = require('express');
const app=express()
//get request
app.get("/",(req,res)=>{
    res.send("it a get request . it is HOME")
})
app.post("/",(req,res)=>{
    res.send("it a post request . it is HOME")
})
app.put("/",(req,res)=>{
    res.send("it a put request . it is HOME")
})
app.delete("/",(req,res)=>{
    res.send("it a delete request . it is HOME")
})

module.exports=app;