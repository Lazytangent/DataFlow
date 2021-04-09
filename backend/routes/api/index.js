const express = require('express');
const usersRouter = require('./users');

const router = express.Router();

router.use('/users', usersRouter);

module.exports = router;
