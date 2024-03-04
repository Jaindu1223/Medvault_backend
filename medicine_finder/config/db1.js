const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority').on('open',() => {
    console.log("Mongodb Connected");
}).on('error',() => {
    console.log("Mongodb error");
})

module.exports = conn;