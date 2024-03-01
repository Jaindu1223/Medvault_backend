const router = require('express').Router();
const prescriptionModel = require('../model/prescription.model');

router.post('/saveprescription', async (req, res) => {
  const prescription = new prescriptionModel(req.body);

  try {
    await prescription.save();
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/prescriptions', async (req, res) => {
  try {
    const prescriptions = await prescriptionModel.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
