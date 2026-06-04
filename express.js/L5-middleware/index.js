const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||3000;

const myMiddleWare = (req,res,next)=>{
    console.log("middle ware")
    req.currTime= new Date(Date.now())
    next();
}
app.use(myMiddleWare)

app.use((req,res,next)=>{ //it's a middleWare
    res.send("404")
})

app.use((err,res,req,next)=>{
    res.status(500).sent("something went wrong")
})

app.get('/',myMiddleWare, (req,res)=>{
    console.log("i am home "+ req.currTime)
    res.send("hello world ")
});
app.get('/about', (req,res)=>{
    console.log("i am home "+ req.currTime)
    res.send("hello world i am about route")
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});

