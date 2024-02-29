const router = require('express').Router();
const userModel = require('../model/qr.model');


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


// GET API to retrieve email addresses
router.get('/userEmails', async (req, res) => {
  try {
    // Retrieve all users from MongoDB
    const users = await userModel.find({}, 'NIC');

    // Extract email addresses from users
    const NICs = users.map(user => user.NIC);

    res.json(NICs);
  } catch (error) {
    console.error('Error retrieving user emails : ', error);
    res.status(500).json({ error: 'Internal server error ' });
  }
});

module.exports = router;



