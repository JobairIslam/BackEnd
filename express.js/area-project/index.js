const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

// parse application/json
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname + '/circle.html');
});

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle',(req,res)=>{
    const {base,height} = req.body;
    const area = 0.5*base*height;
    res.send(`The area of the triangle is ${area}`);
});

app.post('/circle',(req,res)=>{
    const {radius} = req.body;
    const area = Math.PI*radius*radius;
    res.send(`The area of the circle is ${area}`);
});


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});