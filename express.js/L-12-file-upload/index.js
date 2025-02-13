require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const multer=require("multer")


//file updoad
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const name=Date.now()+"-"+file.originalname;
    cb(null, name)
  }
})

const upload = multer({ storage: storage })
//file updoad
app.get("/test",(req,res)=>{
    res.status(200).send("testing api")
})
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/register",upload.single("image"), (req,res)=>{
    res.send("file is uploaded")
})



app.use((req,res,next)=>{
    res.send("404 not found")
})
app.use((err,req,res,next)=>{
    res.status(500).send("something went wrong")
})
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
