const express = require('express');
const app = express();
const port = 3000;



app.listen(port, () => console.log(`listening on http://localhost:${port}`));


app.get("/test",(req,res)=>{
    res.json({message:"testing"})
})