const db = require('../database.js');
const Usercontr = db.users;

exports.create = (req, res) => {
    Usercontr.create({
                    "name": req.body.name,
                    "email": req.body.email
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
;}