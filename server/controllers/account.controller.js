const db = require('../database.js');
const jwt =  require('jsonwebtoken');

const Usercontr = db.account;

exports.Account = (req, res) =>{
    Usercontr.create({
        "id_user": req.body.id_user,
        "account_type": req.body.account_type,
        "inital_balance": req.body.inital_balance,
        "state": req.body.state
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })};