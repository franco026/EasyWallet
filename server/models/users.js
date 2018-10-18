module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey:true,
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            isEmail: true
        }
    });

    return User;
};