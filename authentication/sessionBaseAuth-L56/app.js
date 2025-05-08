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
require("dotenv").config()
//passport auth
require("./config/passport")




//bcrypt setup
const bcrypt = require('bcrypt');
const saltRounds = 10;

//importing session and passport , mongoStore
const passport = require("passport")
const session = require('express-session')
const MongoStore = require('connect-mongo');

//session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl : process.env.MONGO_URL,
    collectionName : "sessions"
  })
//   cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

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


            bcrypt.hash(req.body.password, saltRounds, async(err, hash)=> {
                const newUser = new User({
                    username:req.body.username,
                    password:hash,
                })
                await newUser.save()
                res.status(201).redirect("/login") // send the newly created user
            });

        
    } catch (error) {
        res.status(500).send("Error registering user") // send error message
    }
}) 


const checkLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return res.redirect("/profile")
    }
    next()
}
//login : get
app.get("/login",checkLoggedIn,(req,res)=>{
    res.render("login")
}) 


//login : post
app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login',successRedirect: "/profile" }),
    );


//profile : get(protected route)
app.get("/profile",(req,res)=>{
    if(req.isAuthenticated()){
        return res.render("profile")
    }
    return res.redirect("/login")
}) 

//logout route
app.get("/logout",(req,res, next)=>{
    try {
        req.logOut((err)=>{
            if(err){
                return next(err)
            }
            return res.redirect("/")
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})





module.exports = app;
