const doctorModel = require('../model/doctor.model');


const getDoctorData = async (req, res) => {
  const docEmail = req.query.email;

  try {
    const doctor = await doctorModel.findOne({ email: docEmail }).exec();

    if (!doctor) {
      return res.status(404).json({ error: 'doctor not found' });
    }

    const docName = doctor.name;
    const docSLMC = doctor.SLMCregiNo;
    const docSpeciality = doctor.speciality;

    res.json({ docName, docSLMC, docSpeciality });
  } catch (error) {
    console.error('Error occurred: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getDoctorData,
};