const express = require('express');
const router = express.Router();
const qrController = require('../controller/qr.controller');

router.get('/:id/email', qrController.getUserEmailById);

module.exports = router;

// const router = require('express').Router();
// const qrNicModel = require('../model/qr.model');


// router.get('/:id/email', async (req, res) => {
//   try {
//     const user = await qrNicModel.findById(req.params.id);
//     if (user) {
//       res.json({ NIC: user.NIC});
//     } else {
//       res.status(404).json({ message: 'User not found..' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// router.post('/userRegistration', async (req,res)=>{
//     try {
//         const {name,email,phonenumber,NIC,password} = req.body;

//         const user = await userModel.findOne({email});
//         if(!user){
//             const createuser = new userModel({name,email,phonenumber,NIC,password});
//             await createuser.save();


//             res.json({status:true,success : "User Created Successfully "});
//         }else{
//             res.json({status:false,success : "User Exist"});
//         }

//     } catch (error) {
//         console.log(error);
//     }
// });
// module.exports = router;


// GET API to retrieve nic 
// router.get('/userNic', async (req, res) => {
//   try {
//     // Retrieve all users from MongoDB
//     const users = await userModel.find({}, 'NIC');

//     // Extract email addresses from users
//     const NICs = users.map(user => user.NIC);

//     res.json(NICs);
//   } catch (error) {
//     console.error('Error retrieving user emails : ', error);
//     res.status(500).json({ error: 'Internal server error ' });
//   }
// });






// router.get('/email', async (req, res) => {
//   try {
//     const userId = req.user.id; // Retrieve the user ID from the request headers
//     const user = await qrNicModel.findById(userId);
//     if (user) {
//       res.json({ email: user.email });
//     } else {
//       res.status(404).json({ message: 'User not found..' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

