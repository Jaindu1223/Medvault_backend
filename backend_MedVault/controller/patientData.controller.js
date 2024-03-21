const userModel = require('../model/user.model');

async function getPatientData(req,res) {
    const patEmail = req.query.email

    try {
    
    const patient = await userModel.findOne({email: patEmail}).exec();

    if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
    }

    const patName = patient.name;
    const patBirthday = patient.birthdate;
    const patAddress = patient.address;

    const[day,month,year] = patBirthday.split('/');
    const birthDate = new Date(`${year}-${month}-${day}`);

    const today = new Date();
    // const birthDate = new Date(patBirthday);
    let patAge = today.getFullYear() - birthDate.getFullYear();
    const monthDif = today.getMonth() - birthDate.getMonth();
    if(monthDif < 0 || (monthDif === 0 && today.getDate() < birthDate.getDate())){
        patAge--;
    }

    res.json({patName,patAge,patAddress});
    
    }catch(error){
        console.error('Error occured: ', error);
        res.status(500).json({error: 'Internel server error'})
    }

};

module.exports = {
    getPatientData
}
