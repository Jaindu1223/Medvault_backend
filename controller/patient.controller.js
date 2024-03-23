const userModel = require('../model/user.model');

async function registerUser(req, res) {
    try {
        const { name,birthdate,address,email,phonenumber,NIC,password } = req.body;

        const user = await userModel.findOne({ NIC});
        if (!user) {
            const createUser = new userModel({ name,birthdate,address,email,phonenumber,NIC,password });
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

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email, password });
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
    registerUser,
    loginUser
};
