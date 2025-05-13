 const express = require ("express")

const app = express();

const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//bcrypt
const bcrypt = require("bcrypt")
//require database
require("./config/database")
//solting
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
//import user model
require("./model/user.model") 
//import user model
const User = require("./model/user.model") 







//initial routes
app.get("/",(req,res)=>{
    res.status(200).send("hello world")
})






//register route
app.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(400).json({ message: `${req.body.username} already exists` })
        }
        const hash = await bcrypt.hash(req.body.password, saltRounds)
        const newUser = new User({
            username: req.body.username,
            password: hash
        })
        
        await newUser.save()
        console.log("New user created:", newUser)
        res.status(201).json({ 
            message: "User created successfully",
            user: newUser 
        })
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
})




//login route
app.post("/login",(req,res)=>{
    res.send("wellcome to the login")
})





//profile route
app.get("/profile",(req,res)=>{
    res.send("wellcome to the profile")
})



// Add this new route to get all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        console.log("All users:", users) // Print to server console
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message })
    }
})




















//wrong route
app.use((req,res,next)=>{
    res.status(404).send("page not found")
})
//error handling
app.use((err,req,res,next)=>{
    res.status(500).send("server error")
})
module.exports=app