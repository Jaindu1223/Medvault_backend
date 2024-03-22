
const express = require('express');
const router = express.Router();
const { watchPharmacyCollection } = require('../controller/pharmacy1.controller');

watchPharmacyCollection().catch(console.error);

module.exports = router;