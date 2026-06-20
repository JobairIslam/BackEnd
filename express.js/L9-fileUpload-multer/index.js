const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const multer = require('multer')


//file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = file.originalname;
      cb(null, name)
    }
  })
  
  const upload = multer({ storage: storage })



app.get('/',(req,res)=>{
    res.send("hello world")
});
app.get('/upload',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.post('/upload',upload.single('image'),(req,res)=>{
    res.status(200).send("file is uploaded")
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});