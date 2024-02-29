// prescriptions.model.js

const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const prescriptionSchema = new Schema({
  name: {
    type: String,
    //required: true
  },
  address: {
    type: String,
    //required: true
  },
  phoneNumber: {
    type: String,
    //required: true
  },
} //{
  //timestamps: true
//}
)

//module.exports = mongoose.model('Prescription', PrescriptionSchema);

const prescriptionModel = db.model('prescription',prescriptionSchema);
module.exports = prescriptionModel;