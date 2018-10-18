const db = require('../database.js');

const Usercontr = db.account;
const user = db.users;



exports.Account = (req, res) =>{
    Usercontr.create({
        "id_user": req.decoded,
        "account_type": req.body.account_type,
        "name": req.body.name,
        "initial_balance": req.body.initial_balance ,
        "state": 'activo'
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })};

exports.getAccount = (req, res) => {
   Usercontr.findAll({
       where: {id_user: req.decoded}
   })
   .then(usercontr =>{  
    res.json(usercontr);
   })  
};

exports.Update = (req, res) =>{
    const id = parseInt(req.body.id_account);

    Usercontr.update(
       req.body,
        { where:
            { id_account: id }
        })
        .then(usercontr =>{
            res.json(usercontr)
        })};