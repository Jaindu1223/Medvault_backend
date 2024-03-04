const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pharmacyRouter = require('./router/pharmacy.router');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',pharmacyRouter,);

module.exports = app;