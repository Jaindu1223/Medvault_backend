const doctorModel = require('../model/doctor.model');

async function registerDoctor(req, res) {
    try {
        const { name,address, email, phonenumber, NIC, SLMCregiNo, speciality, password } = req.body;

        const user = await doctorModel.findOne({ SLMCregiNo });
        if (!user) {
            const createUser = new doctorModel({ name, address, email,phonenumber,  NIC, SLMCregiNo, speciality, password });
            await createUser.save();

            res.json({ status: true, success: "User Created Successfully" });
        } else {
            res.json({ status: false, success: "User Exist" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function loginDoctor(req, res) {
    try {
        const { email, password } = req.body;

        const user = await doctorModel.findOne({ email, password });
        if (user) {
            res.json({ status: true, success: user });
        } else {
            res.json({ status: false, success: "User Invalid. Please Try Again" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    registerDoctor,
    loginDoctor
};
