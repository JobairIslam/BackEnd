require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;


//middleWare function
const myMiddleWare=(req,res,next)=>{
    console.log("Middle ware function")
    next();
}

app.get("/",myMiddleWare,(req,res)=>{
    res.send("home rout")
})
app.get('*', (req, res) => {
    res.send("404");
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
