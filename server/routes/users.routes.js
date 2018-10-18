const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Usercontr = require('../controllers/users.controller')
const Accountcontr = require('../controllers/account.controller')
const Categorycontr = require('../controllers/category.controller')

function verifyToken(req, res, next){
    
  var token = req.headers.authorization.split(' ')[1];
  
  var token = token.split('token')[1];
  var token = token.split(':')[1];
  var token = token.split('}')[0];
  var token = token.split('"')[1];
  
  console.log(token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'secretkey', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded.subject;    
        
        next();
      }
    });
  }}

router.post('/login', Usercontr.login);
router.post('/category', verifyToken, Categorycontr.Category);
router.get('/account', verifyToken, Accountcontr.getAccount);
router.post('/account', verifyToken, Accountcontr.Account);
router.put('/edit', verifyToken, Accountcontr.Update);


module.exports = router;
