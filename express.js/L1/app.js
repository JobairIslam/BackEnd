const express = require('express');
const app=express()
const userRouter=require("./routes/users.route")

app.use("/api/user",userRouter)


//get request
app.get("/",(req,res)=>{ 
    res.send("it a get request . it is HOME")
    res.end()
})
//response
app.use("/jubair", (req, res) => {
    res.status(200).json({
        name: "jubair islam",
        age: "23",
        statusCode:200
    })
    // res.redirect("/api/user/login")
});
//html file as response
app.use("/jubair2", (req, res) => {
    res.status(200).json({
        name: "jubair islam",
        age: "23",
        statusCode:200
    })
    // res.redirect("/api/user/login")
});
//response
app.use((req,res)=>{
    res.send("<h1>404</h1>")
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