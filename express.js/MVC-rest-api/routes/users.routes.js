const express=require("express")
const { getallusers, createUser, updateUser, deleteUser} = require("../controllers/users.controllers")
const router =express.Router()



router.get("/",getallusers)
router.post("/",createUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)


module.exports=router

