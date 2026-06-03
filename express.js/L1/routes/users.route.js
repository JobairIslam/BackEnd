const express = require('express')
const path = require('path')
const Router = express.Router()



Router.get("/",(req,res)=>{
    res.status(200).json({
        "name" : "jobair",
        "age" : 23,
        statusCode : 200
    })
    res.end()
})

Router.get("/register",(req,res)=>{
    res.status(200);
    res.sendFile(path.join(__dirname, "..", "views", "register.html"))
}) 

Router.get("/login",(req,res)=>{
    res.cookie("name","rabeya")
    // res.clearCookie("name")
    res.append("id" , "1000")
    res.end()
})

module.exports = Router;