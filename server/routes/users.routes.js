const express = require('express');
const router = express.Router();

const Usercontr = require('../controllers/users.controller')

router.get('/', Usercontr.getUsers);
router.post('/', Usercontr.createUser);
router.get('/:id', Usercontr.getUser);
router.put('/:id', Usercontr.editUser);


module.exports = router;