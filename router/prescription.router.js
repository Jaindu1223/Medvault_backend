const express = require('express');
const router = express.Router();
const prescriptionController = require('../controller/prescription.controller');

router.post('/saveprescription', prescriptionController.savePrescription);
router.get('/prescriptions', prescriptionController.getAllPrescriptions);
router.get('/email/:email', prescriptionController.getPrescriptionByEmail);

module.exports = router;
