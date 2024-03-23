const prescriptionModel = require('../model/prescription.model');

async function savePrescription(req, res) {
  const prescription = new prescriptionModel(req.body);

  try {
    await prescription.save();
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAllPrescriptions(req, res) {
  try {
    const prescriptions = await prescriptionModel.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getPrescriptionByEmail(req, res) {
  try {
    const prescription = await prescriptionModel.findOne({ email: req.params.email });
    if (!prescription) throw new Error('Prescription not found');
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  savePrescription,
  getAllPrescriptions,
  getPrescriptionByEmail
};
