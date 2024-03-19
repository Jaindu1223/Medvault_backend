const express = require('express');
const router = express.Router();
const nameModel = require('../model/pharmacy1.model');

// router.get('/pharmacies/:pharmacyName', async (req, res) => {
//   try {
//     const pharmacyName = req.params.pharmacyName;
//     const pharmacies = await nameModel.find({ pharmacyName: pharmacyName }, 'name');
//     res.json(pharmacies.map(pharmacy => pharmacy.name));
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const nameModel = require('../model/pharmacy1.model');

// router.get('/names/:name', async (req, res) => {
//   try {
//     const name = req.params.name;
//     const pharmacy = await nameModel.findOne({ name: name }, 'name');
//     if (pharmacy) {
//       res.json(pharmacy.name);
//     } else {
//       res.status(404).json({ message: 'Pharmacy not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

// router.get('/fetchAndInsertData', async (req, res) => {
//   try {
//     const database = client.db("test");
//     const pharmaciesCollection = database.collection("pharmacies");
//     const medicineCollection = database.collection("pharmacy1");

//     // Fetch data from the pharmacies collection where pharmacy field matches "pharmacy1"
//     const query = { pharmacy: "pharmacy1" };
//     const projection = { medicine: 1 }; // Only fetch the medicine field
//     const pharmaciesData = await pharmaciesCollection.find(query, projection).toArray();

//     if (pharmaciesData.length === 0) {
//       return res.status(404).json({ error: "Pharmacy not found" });
//     }

//     // Extract medicine names from the fetched data
//     const medicineNames = pharmaciesData.map(doc => doc.medicine).flat(); // Assuming medicine is an array

//     // Insert the extracted medicine names into the medicine collection
//     const insertResult = await medicineCollection.insertMany(medicineNames.map(name => ({ name })));

//     res.json({ insertedCount: insertResult.insertedCount });
//   } catch (error) {
//     console.error("Error fetching and inserting data:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
