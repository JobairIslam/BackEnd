const express = require('express');
const joi = require('joi');
const app = express();
const port = 3008;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => console.log(`listening on http://localhost:${port}`));


app.get("/test",(req,res)=>{
    res.json({message:"testing"})
})

//api/register

app.post("/api/register", (req, res) => {
    try {
        console.log("Received data:", req.body);
        const user={
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
        return res.send("user is created");
    } catch (error) {
        return res.send({ message: error.message });
    }
});
