const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
const {body, validationResult}=require("express-validator")

app.get("/test", (req, res) => {
    res.send("test route");
});

// Name, email, pass, dob
// /api/register
app.post("/api/register",
   //input validation
   body("name")
   .trim()
   .notEmpty()
   .withMessage("mane is required")
   .isLength({min:5})
   .withMessage("name must have at least 5 characters")
   .isLength({max:15})
   .withMessage("name can have max 15 characters")
   ,(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array})
    }
    next()
   }
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
