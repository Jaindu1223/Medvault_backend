const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const qrNicSchema = new Schema({

  NIC: {
    type: String,
    unique: true,
  },
});

const qrNicModel = db.model('signup_details', qrNicSchema);
module.exports = qrNicModel;