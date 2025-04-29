const express =require("express")
const cors =require("cors")
const ejs =require("ejs")
const User=require("./models/user.model")
require("./config/database")
require("dotenv").config()
const bcrypt = require('bcrypt');
const saltRounds = 10;

const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require("passport")



const app=express();

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs");


app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName:sessions
  })
//   cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())


//home route
app.get("/",(req,res)=>{
    res.render("index")
})







//register route:get
app.get("/register",(req,res)=>{
    res.render("register")
})

//register:post
app.post("/register",async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        if(user){
            return res.status(400).send("user exists")
        }
        bcrypt.hash(req.body.pass, saltRounds, async(err, hash)=> {
            const newUser = new User({
                username:req.body.username,
                pass:hash
            });
            await newUser.save()
            res.status(201).redirect("/login")
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})


//login:get
app.get("/login",(req,res)=>{
    res.render("login")
})



//login:post
app.post("/login",(req,res)=>{
    try {
        res.status(201).send("user is loged in")
    } catch (error) {
        res.status(500).send(error.message)
    }
})


//profile route: protected
app.get("/profile",(req,res)=>{
    res.render("profile")
})


//profile route: protected
app.get("/logout",(req,res)=>{
    res.redirect("/")
})

module.exports=app;