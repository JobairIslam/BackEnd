require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;


//middleWare function
const myMiddleWare=(req,res,next)=>{
    console.log("Middle ware function")

    req.currTime=new Date(Date.now())
    next(); 
}

//sob request er moddhe middleWare call na kore ai system use korle sob request er moddhe e middleWare ta thakbe

// app.use(myMiddleWare)


app.get("/",myMiddleWare,(req,res)=>{
    res.send("home rout")
    console.log(req.currTime)
})
// app.get('*', (req, res) => {
//     res.send("404");
// });
//error handeling middleWare
app.use((req,res,next)=>{
    res.send("404 not found")
})
app.use((err,req,res,next)=>{
    res.status(500).send("something went wrong")
})
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
