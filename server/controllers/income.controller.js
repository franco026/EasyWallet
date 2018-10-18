const db = require('../database.js');

const Incomecontr = db.income;

exports.Category = (req, res) =>{
    Incomecontr.create({
        "id_account": req.body.id_account,
        "id_category": req.body.id_category,
        "description": req.body.description,
        "date": req.body.date,
        "payment": req.body.payment,
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })};