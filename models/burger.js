module.exports = function(sequelize, DataTypes) {
    var getBurger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len:[1,140]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            
        }
    });
    return getBurger;
};