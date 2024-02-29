const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./router/qr.router');
const prescriptionRouter = require('./router/prescription.router');

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50Mb' }));
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',userRouter,);

// API endpoint for saving prescription
app.use('/', prescriptionRouter);

module.exports = app;
