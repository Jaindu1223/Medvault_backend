const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb+srv://T_123456:T_123456@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority').on('open',() => {
    console.log("Mongodb Connected");
}).on('error',() => {
    console.log("Mongodb error");
})

module.exports = conn;