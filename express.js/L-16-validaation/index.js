const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const {body}=require("express-validator")

app.get("/test", (req, res) => {
    res.send("test route");
});

// Name, email, pass, dob
// /api/register
app.post("/api/register",
   //input validation
   body("name").trim().notEmpty()
    ,(req, res) => {
    try {
        const { name, email, pass, dob } = req.body;
        const newUser={
            name,email,pass,dob
        }
        res.status(201).json({
            message: "User was created",
            newUser
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
