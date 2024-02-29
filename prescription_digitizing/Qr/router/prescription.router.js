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

module.exports = router;