const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

//schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
    },
    //unique id every user      
    id: {
        type: Number,    
        required: true,
        unique: true,
        default: 1,
        auto: true // Note: This alone won't auto-increment
    },
    age: {       
        type: Number,
        required: [true, "age is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }    
})      

userSchema.plugin(AutoIncrement, {inc_field: 'id'});

//model
const userModel = mongoose.model("user", userSchema);

//export
module.exports = userModel;
