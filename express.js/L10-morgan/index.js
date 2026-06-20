const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const morgan = require('morgan')
app.use(morgan("dev"))

app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/sumu',(req,res)=>{
    res.status(200).send("hello wum sumu")
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});