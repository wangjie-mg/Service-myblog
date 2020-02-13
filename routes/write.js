const express = require('express');
const router = express.Router();

const add = require('../Api/writeadd');
const find=require('../Api/writefind');
const addl = require('../Api/writeadda');
router.post('/writeadd',add);
router.post('/writefind',find);
router.post('/addl',addl)

module.exports = router;