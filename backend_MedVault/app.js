const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pharmacyRouter = require('./router/pharmacy.router');
const userLocationRouter = require('./router/userLocation.router');
const qrNicRouter = require('./router/qr.router');
const prescriptionRouter = require('./router/prescription.router');
const userRouter = require('./router/user.router');
const doctorRouter = require('./router/doctor.router');
const pharmacy1Router = require('./router/pharmacy.router');


const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',pharmacyRouter,);
// app.use('/', userLocationRouter)
app.use('/',qrNicRouter,);
app.use('/', prescriptionRouter);
app.use('/',userRouter);
app.use('/',doctorRouter);
app.use('/', pharmacy1Router);

module.exports = app;