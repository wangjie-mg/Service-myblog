const express = require('express');

const router = express.Router();

const usertoken = require('../Api/usertoken');

router.post('/', usertoken);

module.exports = router;