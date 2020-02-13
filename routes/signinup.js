const express = require('express');
const router = express.Router();

const signup=require('../Api/signup');
const login=require('../Api/login');
router.post('/login',login);
router.post('/signup', signup);

module.exports = router;