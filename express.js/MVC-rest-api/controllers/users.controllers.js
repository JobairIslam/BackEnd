let users=require("../models/users.model")
const {v4: uuidv4}=require("uuid")

//get req
const getallusers=(req,res)=>{
    res.status(200).json({users})
}
//  post/create req
const createUser=(req,res)=>{
    const newUser={
        id: uuidv4(),
        username:req.body.username,
        email:req.body.email
    }
    users.push(newUser)
    res.status(200).json({users})
}
//update req
const updateUser=(req,res)=>{
    const userid=req.params.id;
    const {username,email} =req.body
    users.filter((user)=>user.id==userid).map((seletedser)=>{
        seletedser.username=username
        seletedser.email=email
    })
    res.status(200).json({users})
}

//delete req
const deleteUser=(req,res)=>{
    const userid=req.params.id
    users = users.filter((user) => user.id != userid);
    res.status(200).json({users})
}

module.exports={getallusers,createUser,updateUser,deleteUser}