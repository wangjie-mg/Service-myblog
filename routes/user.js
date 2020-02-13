const express = require('express');
const router = express.Router();

// 引入user.js
const   add = require('../Api/add'),
        find = require('../Api/find'),
        update = require('../Api/update'),
        remove = require('../Api/remove');


router.post('/add', add);
router.post('/find', find);
router.post('/remove', remove);
router.post('/update', update);

module.exports = router;