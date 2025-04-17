const userModel=require("../models/user.model");


const getAllUsers = async(req, res) => {
    const users=await userModel.find(); //find all users
    try {
        res.status(200).json({
            message: "getAllUsers from controller",
            users : users
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
}

const getOneUserByID = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.findOne({ id: Number(id) });
        if(!user){
            return res.status(404).json({
                message: "user not found"
            }); 
        }
        res.status(200).json({
            message: "getOneUserByID from controller",
            user : user
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
}

const createUser = async(req, res) => {
    try {
        const newUser=await userModel.create(req.body);
        const users=await userModel.find(); 
        res.status(201).json({
            message: "createUser from controller",
            newUser : newUser,
            users : users
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
}  

const updateUser = async(req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.findOneAndUpdate(
            {id: Number(id)},
            {$set: req.body},
            {new: true}
        );
        const users = await userModel.find();
        if(!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }
        res.status(200).json({      
            message: "updateUser from controller",
            user : user,
            users : users
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
}

const deleteUser = async(req, res) => {
    const {id}=req.params;      
    try {
        const user=await userModel.findOneAndDelete({id:Number(id)});
        const users=await userModel.find();     
        if(!user){
            return res.status(404).json({
                message: "user not found"
            });
        }
        res.status(200).json({
            message: "deleteUser from controller",
            users : users,
            user : user 
        });
    } catch (error) {
        res.status(500).json({
            message: "server error"
        });
    }
}   

module.exports = {
    getAllUsers,
    getOneUserByID,
    createUser,
    updateUser,
    deleteUser
};
