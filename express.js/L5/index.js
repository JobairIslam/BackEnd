const express=require("express")
const app=express()
const port=3000;
const bodyParser=require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html")
})
app.get("/tringle",(req,res)=>{
    res.sendFile(__dirname+"/tringle.html")
})


app.listen(port, () => console.log(`listening on http://localhost:${port}`));