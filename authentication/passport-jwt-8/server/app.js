const express =require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")

const app = express()


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())



//register route
app.post("/register",(req,res)=>{
    res.send("register route")
})


//login route
app.post("/login",(req,res)=>{
    res.send("login route")
})

//profile route
app.post("/login",(req,res)=>{
    res.send("login route")
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
app.use((err,req,res,send)=>{
    res.sendStatus(500).send("server error")
})


module.exports = app