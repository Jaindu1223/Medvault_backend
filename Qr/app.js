const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./router/qr.router');

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50Mb' }));
app.use(bodyParser.urlencoded({ limit: '50Mb', extended: true }));

app.use('/',userRouter);

module.exports = app;
