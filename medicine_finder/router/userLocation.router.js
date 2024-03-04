const express = require('express');
const router = express.Router();
const axios = require('axios');
const requestIp = require('request-ip');

router.get('/userCurrentLocation', async (req,res) =>{
    try{

        const clientIp = requestIp.getClientIp(req);
        const response = await axios.get(`https://ipinfo.io/${clientIp}/json`)

        console.log('response Data',response.data)
        const{loc} = response.data;
        const [latitude,longitude] = loc.split(',').map(Number);

        res.json({latitude,longitude});

    }catch(error){

        console.error("Error getting current location",error)
        res.status(500).json({error:"Internal server error"});
    }
})

module.exports = router;