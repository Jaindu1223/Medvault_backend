const express = require('express');
const router = express.Router();
const pharmacyController = require('../controller/pharmacy.controller');

router.get('/searchPharmacies', pharmacyController.searchPharmacies);

module.exports = router;

  
// const geolib = require('geolib');


// router.get('/searchPharmacies', async (req, res) => {
//   try { 

//     const medicineName = req.query.userMedicine.toLowerCase();
//     const latitude=parseFloat(req.query.userLatitude);
//     const longitude=parseFloat(req.query.userLongitude);

//     const userLocation = {
//       latitude,
//       longitude
//     }

//     const pharmacies = await pharmacyModel.find({ medicine: { $all: [medicineName] } }).exec();

//     if (!pharmacies || pharmacies.length === 0) {
//       return res.status(404).json({ error: "Medicine not found" });
//     } 

//     const pharmaciesWithDistances = pharmacies.map(pharmacy => ({
//       ...pharmacy.toObject(),
//       distance: geolib.getDistance(
//         { latitude, longitude },
//         { latitude: pharmacy.location.coordinates[1], longitude: pharmacy.location.coordinates[0] }
//       )
//     }));

//     pharmaciesWithDistances.sort((a, b) => a.distance - b.distance);

//     const nearestPharmacy = pharmaciesWithDistances[0];
//     const nearestPharmacyName = nearestPharmacy.pharmacy;
//     const city = nearestPharmacy.city;
//     const mapLink = nearestPharmacy.link;
//     const contact = nearestPharmacy.contact;

//     res.json({ nearestPharmacyName,city,userLocation,mapLink,contact });
    

//   } catch (error) {
//     console.error("Error searching pharmacies:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const pharmacyModel = require('../model/pharmacy.model');
// const pharmacy1Model = require('../model/pharmacy1.model'); // Import the pharmacy1 model
// const geolib = require('geolib');

// router.get('/searchPharmacies', async (req, res) => {
//   try { 
//     const medicineName = req.query.userMedicine.toLowerCase();
//     const latitude = parseFloat(req.query.userLatitude);
//     const longitude = parseFloat(req.query.userLongitude);

//     const userLocation = {
//       latitude,
//       longitude
//     }

//     // Get medicine names from pharmacy1 collection
//     const pharmacy1 = await pharmacy1Model.findOne({ pharmacy: "pharmacy1" }).exec();
//     const availableMedicines = pharmacy1 ? pharmacy1.medicine.map(med => med.toLowerCase()) : [];

//     // Check if requested medicine is available
//     if (!availableMedicines.includes(medicineName)) {
//       return res.status(404).json({ error: "Medicine not found" });
//     } 

//     // Find pharmacies with the requested medicine
//     const pharmacies = await pharmacyModel.find({ pharmacy: "Pharmacy1", medicine: medicineName }).exec();

//     if (!pharmacies || pharmacies.length === 0) {
//       return res.status(404).json({ error: "No pharmacies found with the requested medicine" });
//     } 

//     const pharmaciesWithDistances = pharmacies.map(pharmacy => ({
//       ...pharmacy.toObject(),
//       distance: geolib.getDistance(
//         { latitude, longitude },
//         { latitude: pharmacy.location.coordinates[1], longitude: pharmacy.location.coordinates[0] }
//       )
//     }));

//     pharmaciesWithDistances.sort((a, b) => a.distance - b.distance);

//     const nearestPharmacy = pharmaciesWithDistances[0];
//     const nearestPharmacyName = nearestPharmacy.pharmacy;
//     const city = nearestPharmacy.city;
//     const mapLink = nearestPharmacy.link;
//     const contact = nearestPharmacy.contact;

//     res.json({ nearestPharmacyName, city, userLocation, mapLink, contact });
//   } catch (error) {
//     console.error("Error searching pharmacies:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;
