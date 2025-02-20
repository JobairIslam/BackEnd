const express = require("express");
const { body,validationResult } = require("express-validator");
const { runlogin, runValidation } = require("../validation/auth");
const { controllLogin, controllValidation } = require("../controllers/users.controllers");
const { userLoginValidator, userValidator } = require("../validation");

const userRoutes=express.Router()

// Name, email, pass, dob validation
userRoutes.post("/register",userValidator,runValidation,controllValidation);


// Login Route with Validation
userRoutes.post("/login",userLoginValidator, runlogin,controllLogin); 



module.exports=userRoutes;