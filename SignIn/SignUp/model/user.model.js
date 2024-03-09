const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required :[true,"Fullname can't be empty"],
    },
    email:{
        type:String,
        required:[true,"Email can't be empty"]
    },
    phonenumber:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
})

const userModel = db.model('signup_details',userSchema);
module.exports = userModel;