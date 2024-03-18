const express = require('express');
const router = express.Router();
const pharmacyModel = require('../model/pharmacy.model');
const geolib = require('geolib');


router.get('/searchPharmacies', async (req, res) => {
  try { 

    const medicineName = req.query.userMedicine.toLowerCase();
    const latitude=parseFloat(req.query.userLatitude);
    const longitude=parseFloat(req.query.userLongitude);

    const userLocation = {
      latitude,
      longitude
    }

    const pharmacies = await pharmacyModel.find({ medicine: { $all: [medicineName] } }).exec();

    if (!pharmacies || pharmacies.length === 0) {
      return res.status(404).json({ error: "Medicine not found" });
    } 

    const pharmaciesWithDistances = pharmacies.map(pharmacy => ({
      ...pharmacy.toObject(),
      distance: geolib.getDistance(
        { latitude, longitude },
        { latitude: pharmacy.location.coordinates[1], longitude: pharmacy.location.coordinates[0] }
      )
    }));

    pharmaciesWithDistances.sort((a, b) => a.distance - b.distance);

    const nearestPharmacy = pharmaciesWithDistances[0];
    const nearestPharmacyName = nearestPharmacy.pharmacy;
    const city = nearestPharmacy.city;
    const mapLink = nearestPharmacy.link;
    const contact = nearestPharmacy.contact;

    res.json({ nearestPharmacyName,city,userLocation,mapLink,contact });
    

  } catch (error) {
    console.error("Error searching pharmacies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;