const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const qrNicRouter = require('./router/qr.router');
const prescriptionRouter = require('./router/prescription.router');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',qrNicRouter,);

// API endpoint for saving prescription
app.use('/', prescriptionRouter);

module.exports = app;
