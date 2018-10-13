const db = require('../database.js');
const jwt =  require('jsonwebtoken');

const Usercontr = db.users;


exports.login = (req, res) => {
     Usercontr.find({
        where: { email: req.body.email}
     })
     .then(usercontr =>{
            if(!usercontr){
                Usercontr.create({
                    "name": req.body.name,
                    "email": req.body.email
                }).then(usercontr => {
                    let payload = { subject: usercontr.id }
                    let token = jwt.sign(payload, 'secretkey')
                    res.json({token});
                }).catch(err =>{
                    console.log(err);
                    res.status(500).json({msg: "error", details: err});
                });
            }else{
                let payload = { subject: usercontr.id }
                let token = jwt.sign(payload, 'secretkey')
                res.json({token});
            }
     })
;}