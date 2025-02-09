const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const users=require("./models/users.model")

const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get("/user",(req,res)=>{
    res.status(200).json({users})
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

//route not found
app.use((req,res,next)=>{
    res.send("something went wrong route")
})
//server error
app.use((err,req,res,next)=>{
    res.send("something went broke")
})

module.exports=app;


 
