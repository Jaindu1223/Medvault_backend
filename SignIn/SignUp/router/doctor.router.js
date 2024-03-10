const router = require('express').Router();
const doctorModel = require('../model/doctor.model');


router.post('/doctorRegistration', async (req,res)=>{
    try {
        const {name,email,SLMCregiNo,NIC,password} = req.body;

        const user = await doctorModel.findOne({SLMCregiNo});
        if(!user){
            const createuser = new doctorModel({name,email,SLMCregiNo,NIC,password});
            await createuser.save();


            res.json({status:true,success : "User Created Successfully"});
        }else{
            res.json({status:false,success : "User Exist"});
        }

    } catch (error) {
        console.log(error);
    }
});

router.post('/doctorLogin', async (req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await doctorModel.findOne({email,password});
        if(user){
           
            res.json({status:true,success : user});
        }else{
            res.json({status:false,success : "User Invalid Please Try Again"});
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;