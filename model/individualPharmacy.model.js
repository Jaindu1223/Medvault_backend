

const mongoose = require('mongoose');

const Schema=mongoose.Schema

const individualPharmacySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports=mongoose.model('Pharmacy1',individualPharmacySchema)
