const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    }
});

//model
const User = mongoose.model("User",userSchema);

module.exports = User;