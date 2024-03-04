const mongoose = require('mongoose');
const db1 = require('../config/db1');

const { Schema } = mongoose;

const pharmacySchema = new Schema({
  pharmacy: String,
  city:String, 
  medicine: String,
  location:Object,

}
)


  
const pharmacyModel = db1.model('pharmacies',pharmacySchema);
module.exports = pharmacyModel;