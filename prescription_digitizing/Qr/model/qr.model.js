const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:Number
    },
    NIC:{
        type:String
    },
    password:{
        type:String
    },
})

const userModel = db.model('signup_details',userSchema);
module.exports = userModel;