module.exports = (sequelize, Sequelize) =>{ 
    const Income = sequelize.define('income', {
        id_transaction: {
          type: Sequelize.INTEGER, 
          autoIncrement: true,
          unique: true,
          primaryKey:true,
        },
        id_account: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'account',
                key: 'id_account',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            },
            primaryKey:true
        },
        id_category: { 
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id_category',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date:{ 
            type: Sequelize.STRING,
            allowNull:false,
            },
        payment: {
            type: Sequelize.INTEGER,
            allowNull:false,
        }
    });
    return Income;
};
