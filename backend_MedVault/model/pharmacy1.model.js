const mongoose = require('mongoose');
const db = require('../config/db');

const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: {
    type: String,
    //required: true
  }
},
//  {
//   _id: false
// }
);

const nameModel = db.model('pharmacy1',nameSchema);
module.exports = nameModel;