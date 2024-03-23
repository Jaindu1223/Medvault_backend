// prescriptions.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
  docName:String,
  docSpeciality:String,
  docSLMC:String,
  patientName:String,
  email:String,
  age:Number,
  address: String,

  medication1Name: String,
  dosage1: Number,
  moreDetails1:String,

  medication2Name: String,
  dosage2 : Number,
  moreDetails2 :String,

  medication3Name: String,
  dosage3: Number,
  moreDetails3 :String,
  
  additional : String,
  instructions: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
}
)




//module.exports = mongoose.model('Prescription', PrescriptionSchema);

const prescriptionModel = db.model('save_prescription',prescriptionSchema);
module.exports = prescriptionModel;