const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pharmacyRouter = require('./router/pharmacy.router');
const userLocationRouter = require('./router/userLocation.router');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',pharmacyRouter,);
// app.use('/', userLocationRouter)

module.exports = app;