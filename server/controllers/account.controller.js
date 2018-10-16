const db = require('../database.js');

const Usercontr = db.account;
const user = db.users;



exports.Account = (req, res) =>{
    Usercontr.create({
        "id_user": req.decoded,
        "account_type": req.body.account_type,
        "initial_balance": req.body.initial_balance ,
        "state": 'activo'
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })};