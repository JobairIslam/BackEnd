const express =require("express")
const userRouter=express.Router()
const { registerUser, loginUser } = require("../controllers/user");
const { runValidation, loginValidation } = require("../validation");

userRouter.post("/register",runValidation,registerUser);
// API: /api/login
userRouter.post("/login",loginValidation, loginUser);



module.exports=userRouter;