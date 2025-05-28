const express =require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const saltRounds = 10;
require("dotenv").config()

const jwt = require('jsonwebtoken');


require ("./config/database")
const User = require("./model/user.model")

const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



//register route
app.post("/register",async(req,res)=>{
    try {
        const user = await User.findOne({username: req.body.username})

    if(user){
        return res.status(400).send("user already exists")
    }

    


    bcrypt.hash(req.body.password, saltRounds,async function(err, hash) {
        const newUser = new User({
            username : req.body.username,
            password : hash
        })
        await newUser.save().then((user)=>{
            res.send({
                success: true,
                message: "user is created",
                user:{
                    id: user._id,
                    username: user.username

                }
            })
        })
        .catch((err)=>{
            res.send({
                success:false,
                err
            })
        })
    });
    } catch (error) {
        res.send(error.message)
    }
})


//login route
app.post("/login",async(req,res)=>{
    const user = await User.findOne({username: req.body.username})
    if(!user){
      return res.send("wrong username")
    }
    if(!(await bcrypt.compare(req.body.password,user.password))){
      return res.send("wrong password")
    }

    const payload ={
        id: user._id,
        username: user.username
    }

    const token = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn:"2d"
    })
    return res.status(200).send({
        success: true,
        message: "loged in",
        token:  "Bearer "+token
    })
})

//profile route
app.get("/profile",(req,res)=>{
    res.send("hi jobair islam asif")
})























//home route
app.get("/",(req,res)=>{
    res.send("wellcome to the server")
})
//wrong route
app.use((req,res,next)=>{
    res.status(404).send("route not found")
}
)
//error handling middleware 
app.use((err,req,res,next)=>{
    res.sendStatus(500).send("server error")
})


module.exports = app