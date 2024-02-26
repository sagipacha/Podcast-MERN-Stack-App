const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    userId:{
        type: 'string',
        required: false 
    }, 
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    role: {
        type: String, 
        enum:['guest', 'creator'],
        required: true 
    },
    profileImg: {
        type: String, 
        required: false 
    }
});

const User = mongoose.model("User", userSchema);
module.exports = { User };

