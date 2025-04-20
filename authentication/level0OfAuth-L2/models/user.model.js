const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}, {timestamps: true}); 

const encKey = process.env.ENC_KEY;

userSchema.plugin(encrypt, { secret: encKey, encryptedFields: ["pass"],requireAuthenticationCode:false });

const User = mongoose.model("User", userSchema);

module.exports = User;
