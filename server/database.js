const Sequelize = require('sequelize');

const sequelize = new Sequelize('EasyWallet', 'postgres', 'leidy',{
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
db.account = require('../server/models/account.js')(sequelize, Sequelize);
db.category = require('../server/models/category.js')(sequelize, Sequelize);
db.budget = require('../server/models/budget.js')(sequelize, Sequelize);
db.transaction = require('../server/models/transaction.js')(sequelize, Sequelize);

module.exports = db;
