const express = require('express');
const app = express();
const port=3000;
const bodyParser=require("body-parser")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.post("/user",(req,res)=>{
    const name=req.body.name;
    res.send(`welcome ${name}`)
})
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
