const Sequelize = require('sequelize');

const sequelize = new Sequelize('EasyWallet', 'postgres', 'postgres',{
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorsAliases:false,
    define:{
        timestamps:false,
        freezeTableName:true
    }
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('../server/models/users.js')(sequelize, Sequelize);

module.exports = db;