module.exports = (sequelize, Sequelize) =>{ 
    const Transaction = sequelize.define('transaction', {
        id: {
          type: Sequelize.INTEGER, 
          autoIncrement: true,
          primaryKey:true,
        },
        id_account: {
            type: Sequelize.STRING,
            allowNull: false,
            references:{
                model: 'account' ,
                key: 'id',
                as: 'id_account',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        id_category: {
            type: Sequelize.STRING,
            allowNull: false,
            references:{
                model: 'category' ,
                key: 'id',
                as: 'id_category',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        id_budget: {
            type: Sequelize.STRING,
            allowNull: false,
            references:{
                model: 'budget' ,
                key: 'id',
                as: 'id_budget',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        transaction_type:{
            type: Sequelize.STRING,
            allowNull: false
        },
        transaction_date: {
            type: Sequelize.DATE,
            allowNull:false,
            defaultValue: Sequelize.NOW
        },
        payment: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        description:{
            type: Sequelize.TEXT,
            defaultValue: 'Sin descripción'
        }
       },{//Configuration
        freezeTableName: true,
        tableName: 'transaction'
       });  

    return Transaction ;
};