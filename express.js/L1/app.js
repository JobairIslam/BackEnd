const express = require('express');
const app=express()
//get request
app.get("/",(req,res)=>{
    res.send("it a get request . it is HOME")
    res.end()
})
app.get("/register",(req,res)=>{
    res.send("it a get request . it is Register")
    res.end()
})
app.get("/login",(req,res)=>{
    res.send("it a get request . it is LogIn")
    res.end()
})

//post request
app.post("/",(req,res)=>{
    res.send("it a post request . it is HOME")
    res.end()
})
//put request
app.put("/",(req,res)=>{
    res.send("it a put request . it is HOME")
    res.end()
})
//delete request
app.delete("/",(req,res)=>{
    res.send("it a delete request . it is HOME")
    res.end()
})

module.exports=app;