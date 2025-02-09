const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRouter=require("./routes/users.routes")

const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/user",userRouter)



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


 
