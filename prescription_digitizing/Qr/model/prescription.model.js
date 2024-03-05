// prescriptions.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
  patientName:String,
  age:Number,
  address: String,
  medicationName: String,
  dosage: Number,
  instructions: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
}
)

prescriptionModel.statics.find = async function() {
  return await this.find({});
};


//module.exports = mongoose.model('Prescription', PrescriptionSchema);

const prescriptionModel = db.model('save_prescription',prescriptionSchema);
module.exports = prescriptionModel;