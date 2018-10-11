const express = require('express');
const router = express.Router();

const Usercontr = require('../controllers/users.controller')

router.post('/', Usercontr.create);


module.exports = router;
