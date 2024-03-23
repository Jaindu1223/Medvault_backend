const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorData.controller');

router.get('/getDoctorData', doctorController.getDoctorData);

module.exports = router;


// const router = require('express').Router();
// const doctorModel = require('../model/doctor.model');

// router.get('/getDoctorData', async (req,res) =>{
//     const docEmail = req.query.email

//     try {
    
//     const doctor = await doctorModel.findOne({email: docEmail}).exec();

//     if (!doctor) {
//         return res.status(404).json({ error: 'doctor not found' });
//     }

//     const docName = doctor.name;
//     const docSLMC = doctor.SLMCregiNo;
//     const docSpeciality = doctor.speciality;



//     res.json({docName,docSLMC,docSpeciality});
    
//     }catch(error){
//         console.error('Error occured: ', error);
//         res.status(500).json({error: 'Internel server error'})
//     }

// });

// module.exports = router

    // const today = new Date();
    // // const birthDate = new Date(patBirthday);
    // let patAge = today.getFullYear() - birthDate.getFullYear();
    // const monthDif = today.getMonth() - birthDate.getMonth();
    // if(monthDif < 0 || (monthDif === 0 && today.getDate() < birthDate.getDate())){
    //     patAge--;
    // }