const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.get('/products/:id',(req,res)=>{
    res.send(`product id is ${req.params.id}`)
});
app.get('/',(req,res)=>{
    res.send("hello world")
});

//404 route for wrong url
app.get('/{*any}', (req, res) => {
    res.status(404).send('404 not found');
  });

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});