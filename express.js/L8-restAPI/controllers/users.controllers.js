const users = require("../models/users.models")

exports.getUsers = (req,res)=>{
    res.status(200).json({
        users: users
    })
}
const {v4: uuidv4} = require('uuid');

exports.postUsers = (req,res)=>{
    const {username,email} = req.body;
    if(!username || !email){
        return res.status(400).json({message:"Username and email are required"});
    }
    const newUser = {
        id: uuidv4(),
        username,
        email
    }
    users.push(newUser);
    res.status(201).json({user:users});
}

//update user
exports.updateUser = (req,res)=>{
    const {id} = req.params;
    const {username,email} = req.body;
    if(!username || !email){
        return res.status(400).json({message:"Username and email are required"});
    }
    const user = users.find((user)=>user.id === id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    user.username = username;
    user.email = email;
    res.status(200).json({user:users});
}

//delete user
exports.deleteUser = (req, res)=>{
    const {id} = req.params;
    const user = users.find((user)=>user.id === id);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    users = users.filter((user)=>user.id !== id);
    res.status(200).json({user:users});
}