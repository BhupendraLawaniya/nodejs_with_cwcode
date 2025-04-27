const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    phonenumber:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:[true, 'passwords is required']
    }
},
{timestamps:true}
);
const User = mongoose.model('User', userSchema);
module.exports = User;
