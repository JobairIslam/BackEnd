const express = require("express")
const cors = require("cors")
const ejs = require("ejs")
const app = express();
require("./config/database")
const User = require("./models/user.model")
app.set("view engine","ejs")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const mongoose = require("mongoose")


//make a home route
app.get("/",(req,res)=>{
    res.render("index")
})  

//register : get
app.get("/register",(req,res)=>{
    res.render("register")
})  
//register : post
app.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username }) // fixed 'request' to 'req'
        if (user) return res.status(400).send("user already exists")
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).redirect("/login") // send the newly created user
    } catch (error) {
        res.status(500).send("Error registering user") // send error message
    }
}) 
//login : get
app.get("/login",(req,res)=>{
    res.render("login")
}) 
//login : post
app.post("/register",(req,res)=>{
    
}) 
//profile : get(protected route)
app.get("/profile",(req,res)=>{
    res.render("profile")
}) 

//logout route
app.get("/logout",(req,res)=>{
    res.redirect("/")
})





module.exports = app;
