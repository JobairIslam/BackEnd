const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;

//use express json
app.use(express.json());
//use express urlencoded
app.use(express.urlencoded({ extended: true }));

//use cors
app.use(cors());

//use dotenv
require("dotenv").config();

//connect to mongodb
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI).then(()=>{
    console.log("connected to mongodb");    
}).catch((err)=>{
    console.log(err);
    process.exit(1);
});

//user model
const User = require("./models/user.model");
// const md5 = require("md5");  
// console.log(md5("123456"));
const bcrypt = require('bcrypt');
const saltRounds = 10;   


//home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//get all users
app.get("/register/users", async (req, res) => {
    const users = await User.find();
    res.status(200).json({users});
});

//register route
app.post("/register", async (req, res) => {
    const {name,pass} = req.body;
    try {
        const user = await User.find();
        
         
        
        // Convert callback-based bcrypt.hash to Promise
        const hash = await bcrypt.hash(pass, saltRounds);
        
        
        
        const newUser = new User({
            name,
            pass: hash  // Make sure this is the hash, not the original password
        });

        //save the user to the database 
        await newUser.save();
        res.status(201).json({message: "User created successfully", newUser, allUsers: user});   

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//login route 
app.post("/login", async (req, res) => {
    const pass = req.body.pass;
    const name = req.body.name;
    
    // Find user by name
    const user = await User.findOne({ name });

    // If user not found
    if (!user) {
        return res.status(400).json({ message: "Username not found" });
    }

    // Compare password with stored hash
    bcrypt.compare(pass, user.pass, function(err, result) {
        if (err) {
            return res.status(500).json({ message: "Error checking password" });
        }
        
        if (!result) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        // Credentials match
        return res.status(200).json({ message: "Login successful", user });
    });
}); 


//server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

//wrong route
app.use((req, res, next) => {
    res.status(404).send("Route not found");
});

//server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});





