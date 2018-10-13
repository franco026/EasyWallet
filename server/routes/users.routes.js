const express = require('express');
const router = express.Router();

const Usercontr = require('../controllers/users.controller')
const Accountcontr = require('../controllers/account.controller')

function verifyToken(req, res, next){
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
      }
      let token = req.headers.authorization.split(' ')[1]
      if(token === 'null') {
        return res.status(401).send('Unauthorized request')    
      }
      let payload = jwt.verify(token, 'secretKey')
      if(!payload) {
        return res.status(401).send('Unauthorized request')    
      }
      req.userId = payload.subject
      next()
    }

router.post('/login', Usercontr.login);
router.post('/account', Accountcontr.Account);



module.exports = router;
