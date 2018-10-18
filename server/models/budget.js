module.exports = (sequelize, Sequelize) =>{ 
    const Budget = sequelize.define('budget', {
        id: {
          type: Sequelize.INTEGER, 
          autoIncrement: true,
          primaryKey:true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        estimated:{
            type: Sequelize.BIGINT,
            allowNull:false
        },
        state:{
            type: Sequelize.STRING,
            allowNull:false
        }
       },{//Configuration
        freezeTableName: true,
        tableName: 'budget'
       });  

    return Budget;
};
