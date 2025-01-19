const express=require("express")
const { route } = require("../app")
const router = express.Router()

router.get("/register",(req,res)=>{
    res.send("it a get request . it is Register")
    res.end()
})
router.get("/login",(req,res)=>{
    res.send("it a get request . it is LogIn")
    res.end()
})

module.exports=router