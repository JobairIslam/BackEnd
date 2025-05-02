const express = require("express")
const cors = require("cors")
const ejs = require("ejs")
const app = express();


app.set("view engine","ejs")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//home route
app.get("/",(req,res)=>{
    res.send("hello")
})


module.exports = app;
