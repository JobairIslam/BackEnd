const express=require("express")
const { getallusers, createUser } = require("../controllers/users.controllers")
const router =express.Router()



router.get("/",getallusers)
router.post("/",createUser)


module.exports=router

