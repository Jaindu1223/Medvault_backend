const mongoose = require('mongoose');
const db1 = require('../config/db1');

const { Schema } = mongoose;

const pharmacySchema = new Schema({
  pharmacy: String,
  city:String, 
  medicine: [String],
  location:{
    type:{
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates:{
      type:[Number],
      required:true
    }
  }

}
);

pharmacySchema.index({location:'2dsphere'});
  
const pharmacyModel = db1.model('pharmacies',pharmacySchema);
module.exports = pharmacyModel;