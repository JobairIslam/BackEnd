const express=require("express")
const app=express()
const port=3000;
const bodyParser=require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/register",(req,res)=>{
    const fullname=req.body.fullname;
    const age=req.body.age;
    res.send(`hi ${fullname}. your age is ${age}`)
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`));