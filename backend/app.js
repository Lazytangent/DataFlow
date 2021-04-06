const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(helmet({
  contentSecurityPolicy: false,
}));

module.exports = app;
