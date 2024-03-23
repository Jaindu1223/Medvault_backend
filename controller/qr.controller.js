const qrNicModel = require('../model/qr.model');

async function getUserEmailById(req, res) {
  try {
    const user = await qrNicModel.findById(req.params.id);
    if (user) {
      res.json({ NIC: user.NIC });
    } else {
      res.status(404).json({ message: 'User not found..' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getUserEmailById
};
