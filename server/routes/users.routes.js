const express = require('express');
const router = express.Router();

const Usercontr = require('../controllers/users.controller')

router.post('/', Usercontr.create);
router.post('/login', Usercontr.login);



module.exports = router;
