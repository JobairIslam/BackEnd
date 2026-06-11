const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const userRouter = require("./routes/users.route")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//when we go to users route it show a form



app.use(userRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message: "not found"
    })
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});