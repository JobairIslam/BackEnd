const express = require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));//using this we can parse the data from the body
const userRoute=require("./routes/user.route");
app.use("/api/user",userRoute);
const dbConnect = require("./config/db");
dbConnect(); 

//home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});

//invalid route
app.use((req,res,next)=>{
    res.status(404).json({
        message:"invalid route"
    });
});
//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"server error"
    });
});



module.exports=app;

