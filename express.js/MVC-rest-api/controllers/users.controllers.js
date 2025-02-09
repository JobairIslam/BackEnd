let users=require("../models/users.model")
const {v4: uuidv4}=require("uuid")

//get req
const getallusers=(req,res)=>{
    res.status(200).json({users})
}
//post req
const createUser=(req,res)=>{
    const newUser={
        id: uuidv4,
    username:req.body.username,
    email:req.body.email
    }
    users.push(newUser)
    res.status(200).json({users})
}

module.exports={getallusers,createUser}