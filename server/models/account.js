
module.exports = (sequelize, Sequelize) =>{ 
    const Account = sequelize.define('account', {
        id_account: {
          type: Sequelize.INTEGER, 
          autoIncrement: true,
          unique: true,
          primaryKey:true,
        },
        id_user: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        account_type: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        initial_balance: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        state:{ 
            type: Sequelize.STRING
            }
    }/** ,
       {
       indexes: [{
         unique: true,
         fields: ['account_type']
       }]}*/);
    return Account;
};
