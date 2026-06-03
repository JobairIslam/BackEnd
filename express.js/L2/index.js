const express = require("express")
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    const id = req.query.id;
    res.send(`Student id ${id}`)
})

app.get("/user",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/user",(req,res)=>{
    // const name = req.body.name;
    // const age = req.body.age;
    // res.send(`welcome ${name}.`)
    const name = req.body.name;
    const age = req.body.age;
    res.send(`welcome ${name}. You are ${age} years old`)
})





app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})

