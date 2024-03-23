const mongoose = require('mongoose');

const conn= mongoose.createConnection('mongodb+srv://T_123456:T_123456@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority').on('open',() => {
    console.log("Mongodb Connected");
}).on('error',() => {
    console.log("Mongodb error");
})

module.exports = conn;

//const mongoose = require('mongoose');

// module.exports = new Promise((resolve, reject) => {
//   const conn = mongoose.createConnection('mongodb+srv://T_123456:T_123456@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).on('open', () => {
//     console.log("Mongodb Connected");
//     resolve(conn);
//   }).on('error', () => {
//     console.log("Mongodb error");
//     reject(conn);
//   });
// });