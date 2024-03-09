const express = require('express');
const router = express.Router();
const pharmacyModel = require('../model/pharmacy.model');
const geolib = require('geolib');
const axios = require('axios');

// const userLatitude = 80.2160345684007;
// const userLongitude = 6.0317027914054435;

let userLatitude = 0;
let userLongitude = 0;

router.get('/searchPharmacies', async (req, res) => {
  try { 

    if(req.query.latitude && req.query.longitude){
      userLatitude = parseFloat(req.query.latitude);
      userLongitude = parseFloat(req.query.longitude);

    }

    const userLocation = {
      latitude: userLatitude,
      longitude: userLongitude
    }
    
    const medicineName = req.query.medicineName.toLowerCase();

    const pharmacies = await pharmacyModel.find({ medicine: { $all: [medicineName] } }).exec();

    if (!pharmacies || pharmacies.length === 0) {
      return res.status(404).json({ error: "Medicine not found" });
    } 

    const pharmaciesWithDistances = pharmacies.map(pharmacy => ({
      ...pharmacy.toObject(),
      distance: geolib.getDistance(
        { latitude: userLatitude, longitude: userLongitude },
        { latitude: pharmacy.location.coordinates[1], longitude: pharmacy.location.coordinates[0] }
      )
    }));

    pharmaciesWithDistances.sort((a, b) => a.distance - b.distance);

    const nearestPharmacy = pharmaciesWithDistances[0];
    const nearestPharmacyName = nearestPharmacy.pharmacy;

    res.json({ nearestPharmacyName,userLocation });
    

  } catch (error) {
    console.error("Error searching pharmacies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;