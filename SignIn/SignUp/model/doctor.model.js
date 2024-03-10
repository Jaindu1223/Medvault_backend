const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const doctorSchema = new Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    SLMCregiNo :{
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

const doctorModel = db.model('signup_doc_details',doctorSchema);
module.exports = doctorModel;