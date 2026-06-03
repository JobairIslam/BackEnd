const express = require('express')
const app = express();
const userRouter = require("./routes/users.route")


app.use(userRouter)



app.use((req,res)=>{
    res.send("404")
})



module.exports = app;