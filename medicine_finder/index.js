
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const geolib = require('geolib');


const app = express(); 
const PORT = 5000;

const uri = "mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());

const userLatitude = 80.2160345684007; // Userlatitude
const userLongitude = 6.0317027914054435; // Userlongitude

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB and start the server
async function startServer() {
  try {
    await client.connect();
    // console.log("Connected to MongoDB");

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Node and express server is running on port ${PORT}`);
    });

    // Send a ping to confirm a successful connection (optional starting in v4.7)
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if there's an error
  }
}

startServer();

app.get('/searchPharmacies', async (req, res) => { 
  try {
    const database = client.db("stock_check");
    const medicinesCollection = database.collection("pharmacies");

    const medicineName = req.query.medicineName.toLowerCase();//change 1 boady to query
    // const medicine = await medicinesCollection.findOne({ medicine: { $in: [medicineName] } });
    const medicines = await medicinesCollection.find({ medicine: { $all: [medicineName] } }).toArray();

    // if (!medicine) {
    //   return res.status(404).json({ error: "Medicine not found" });
    // }

    // res.json({ pharmacy: medicine.pharmacy});

    if (!medicines || medicines.length === 0) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    const pharmaciesWithDistances = medicines.map(pharmacy => ({
      ...pharmacy,
      distance: geolib.getDistance(
        { latitude: userLatitude, longitude: userLongitude },
        { latitude: pharmacy.location.coordinates[1], longitude: pharmacy.location.coordinates[0] }
      )
    }));

    pharmaciesWithDistances.sort((a, b) => a.distance - b.distance);

    const nearestPharmacy = pharmaciesWithDistances[0];

    res.json({ nearestPharmacy });

    // const pharmacyNames = medicines.map(medicine => medicine.pharmacy);

    // res.json({ pharmacies: pharmacyNames });
  } catch (error) {
    console.error("Error searching pharmacies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});