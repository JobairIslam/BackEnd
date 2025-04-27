const express =require("express")
const cors =require("cors")
const ejs =require("ejs")

const app=express();

app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine","ejs");


//home route
app.get("/",(req,res)=>{
    res.render("index")
})

//register route:get


//register:post


//login:post

//profile route: protected


module.exports=app;