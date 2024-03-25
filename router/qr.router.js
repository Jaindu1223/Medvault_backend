const express = require('express');
const router = express.Router();
const qrController = require('../controller/qr.controller');

router.get('/:id/email', qrController.getUserEmailById);

module.exports = router;

