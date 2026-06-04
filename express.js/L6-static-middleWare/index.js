const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.static("public"))


app.get('/',(req,res)=>{
    res.send("hello world")
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});