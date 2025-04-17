const express=require("express");
const router=express.Router();

//import getAllUsers from userController    
const {getAllUsers,getOneUserByID,createUser,updateUser,deleteUser}=require("../controllers/user.controller");

router.get("/",getAllUsers);
router.get("/:id",getOneUserByID);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports=router;
