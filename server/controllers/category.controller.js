const db = require('../database.js');

const categorycontr = db.category;

exports.Category = (req, res) =>{
    Usercontr.create({
        "id_user": req.decoded,
        "name_category": req.body.name_category,
    }).then(usercontr => {
        res.json(usercontr);
    }).catch(err =>{
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    })};
