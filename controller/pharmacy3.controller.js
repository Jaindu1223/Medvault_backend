const { MongoClient } = require('mongodb');
const dbConnection = require('../config/db'); 

const client = dbConnection.getClient();

async function watchPharmacyCollection() {
  const db = client.db(); 

  const collectionName = 'pharmacy3'; 
  const collection = db.collection(collectionName);
  const changeStream = collection.watch();

  changeStream.on('change', async (change) => {
    if (change.operationType === 'insert') {
      const newMedicine = change.fullDocument.name;
      const pharmacyName = "Pharmacy3"; 

      await updatePharmacyInPharmaciesCollection(pharmacyName, newMedicine);
    }
  });
}

async function updatePharmacyInPharmaciesCollection(pharmacyName, newMedicine) {
  const db = client.db(); 
  const pharmaciesCollection = db.collection('pharmacies');

 
  await pharmaciesCollection.updateOne(
    { pharmacy: pharmacyName },
    { $addToSet: { medicine: newMedicine } }
  );
}


module.exports = {watchPharmacyCollection};

