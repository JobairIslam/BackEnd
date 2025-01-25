const express = require('express');
const app=express()
const userRouter=require("./routes/users.route")

app.use("/api/user",userRouter)


//get request
app.get("/",(req,res)=>{ 
    res.send("it a get request . it is HOME")
    res.end()
})












//http response
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
    res.statusCode=202;
    res.sendFile(__dirname+"/views/jubair.html")
});
app.use("/jubair3", (req, res) => {
    res.statusCode=200;
    res.sendFile(__dirname+"/views/asif.html")
});
//cookies as response
app.use("/jubair4", (req, res) => {
    res.statusCode = 200;
    // Set cookies first
    res.cookie("name", "jubair");
    res.cookie("age", "23");
    // Then send the response
    res.send("hi");
});
//header as response
app.use("/jubair5", (req, res) => {
    res.statusCode = 200;
    res.append("id","119600")
    res.send("hello");
});
//http response


















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