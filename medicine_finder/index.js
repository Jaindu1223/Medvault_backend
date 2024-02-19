
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority";
// const bodyParser = require('body-parser');

// const express = require('express');
// //const routes = require('./src/routes/testRoute')

// const app = express();
// const PORT = 4000;

// app.use(bodyParser.json());

// app.get('/', (req,res) =>
//     res.send(`Node and express server is running on port ${PORT}`)
// )

// // Route to handle pharmacy search
// app.post('/searchPharmacies', async (req, res) => {
//   try {
//     await client.connect();
//     const database = client.db("stock_check");
//     const medicinesCollection = database.collection("medicines");
//     const pharmaciesCollection = database.collection("pharmacies");

//     // Assuming your pharmacies collection has a field named "medicines"
//     const medicineName = req.body.medicineName;
//     const medicine = await medicinesCollection.findOne({ medicine: medicineName });
//     // const pharmacies = await pharmaciesCollection.find({ medicines: medicineName }).toArray();

//     if (!medicine) {
//       return res.status(404).json({ error: "Medicine not found" });
//     }

  
//   const pharmacyId = new ObjectId(medicine.pharmacy);
//   const pharmacy = await pharmaciesCollection.findOne({ _id: pharmacyId });

//   if (!pharmacy) {
//     return res.status(404).json({ error: "Pharmacy not found" });
//   }

//   res.json({ pharmacy: pharmacy.pharmacy, city: pharmacy.city });
// } catch (error) {
//   console.error("Error searching pharmacies:", error);
//   res.status(500).json({ error: "Internal server error" });
// }
// });



// app.listen(PORT, () =>
//     console.log(`Your serevr is running on port ${PORT}`)
// )



// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 4000;

// const uri = "mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority";

// app.use(bodyParser.json());

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// // Connect to MongoDB and start the server
// async function startServer() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");

//     // Start the Express server
//     app.listen(PORT, () => {
//       console.log(`Your server is running on port ${PORT}`);
//     });

//     // Send a ping to confirm a successful connection (optional starting in v4.7)
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit the process if there's an error
//   }
// }

// startServer();

// // Route to handle pharmacy search
// app.post('/searchPharmacies', async (req, res) => {
//   try {
//     const database = client.db("stock_check");
//     const medicinesCollection = database.collection("medicine");

//     const medicineName = req.body.medicineName;
//     const medicine = await medicinesCollection.findOne({ medicine: medicineName });

//     if (!medicine) {
//       return res.status(404).json({ error: "Medicine not found" });
//     }

//     res.json({ pharmacy: medicine.pharmacy, city: medicine.city });
//   } catch (error) {
//     console.error("Error searching pharmacies:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

const uri = "mongodb+srv://kuser:auser@medvault.glzwxzz.mongodb.net/?retryWrites=true&w=majority";

app.use(bodyParser.json());

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
    console.log("Connected to MongoDB");

    // Start the Express server
    app.listen(PORT, () => {
      console.log('Your server is running on port ${PORT}');
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

// Route to handle pharmacy search
//change 2 post to get
app.get('/searchPharmacies', async (req, res) => {
  try {
    const database = client.db("stock_check");
    const medicinesCollection = database.collection("pharmacies");//not medicines

    const medicineName = req.query.medicineName.toLowerCase;//change 1 boady to query
    const medicine = await medicinesCollection.findOne({ medicine: medicineName });

    if (!medicine) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    res.json({ pharmacy: medicine.pharmacy, city: medicine.city });
  } catch (error) {
    console.error("Error searching pharmacies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});