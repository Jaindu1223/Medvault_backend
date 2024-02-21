const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const User = require('./models/User'); // Assuming you have a User model

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

// Define a route to get a user's email by their ID
// app.get('/users', async (req, res) => {
//   try {
//     const userId = req.params.id;

//     // Retrieve user by ID from MongoDB
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Return the user's email
//     res.json({ email: user.email });
//   } catch (error) {
//     console.error('Error retrieving user email:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

