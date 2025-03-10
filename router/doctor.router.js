// const router = require('express').Router();
// const doctorModel = require('../model/doctor.model');
// // const upload = require('../middleware/upload')

// router.post('/doctorRegistration', async (req,res)=>{
//     console.log(req.file)
//     try {
//         const {name,address,email,phonenumber,NIC,SLMCregiNo,speciality,password} = req.body;

//         const user = await doctorModel.findOne({SLMCregiNo});
//         if(!user){
//             const createuser = new doctorModel({name,address,email,phonenumber,NIC,SLMCregiNo,speciality,password})
//             // if(req.file){
//             //     createuser.sign = req.file.path;
//             // }
//             await createuser.save();


//             res.json({status:true,success : "User Created Successfully"});
//         }else{
//             res.json({status:false,success : "User Exist"});
//         }

//     } catch (error) {
//         console.log(error);
//     }
// });

// router.post('/doctorLogin', async (req,res)=>{
//     try {
//         const {email,password} = req.body;

//         const user = await doctorModel.findOne({email,password});
//         if(user){
           
//             res.json({status:true,success : user});
//         }else{
//             res.json({status:false,success : "User Invalid Please Try Again"});
//         }

//     } catch (error) {
//         console.log(error);
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctor.controller');

router.post('/doctorRegistration', doctorController.registerDoctor);
router.post('/doctorLogin', doctorController.loginDoctor);

module.exports = router;