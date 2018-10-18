module.exports = (sequelize, Sequelize) =>{
    const Category = sequelize.define('category', {
        id_category: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
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
        name_category: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Category;
};