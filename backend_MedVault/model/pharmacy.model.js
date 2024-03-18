const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const pharmacySchema = new Schema({
  pharmacy: {type:String},
  city:{type:String}, 
  medicine: {type:String},
  location:{
    type:{
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates:{
      type:[String],
      required:true
    }
  },
  link: {type: String},
  contact: {type: String}

}
);

pharmacySchema.index({location:'2dsphere'});
  
const pharmacyModel = db.model('pharmacies',pharmacySchema);
module.exports = pharmacyModel;