
const router = require('express').Router();

const patientdataController = require('../controller/patientData.controller');

router.get('/getPatientData', patientdataController.getPatientData);

module.exports = router;
    