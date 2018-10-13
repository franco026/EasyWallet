
module.exports = (sequelize, Sequelize) =>{ 
    const Account = sequelize.define('account', {
        id: {
          type: Sequelize.INTEGER, 
          autoIncrement: true,
          primaryKey:true,
        },
        id_user: {
            type: Sequelize.STRING,
            allowNull: false,
            references:{
                model: 'users' ,
                key: 'id',
                as: 'id_user',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },

        account_type: [
            { unique: true,
            fields: ['Ahorro','Corriente','Debito'] }
        ],
        inital_balance: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        state: [
            { type: Sequelize.STRING,
            fields: ['Activo','Inactivo'] }
        ]
       });
    

    return Account;
};
