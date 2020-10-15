const Sequelize = require("sequelize");

const applicationSequelizeObject = new Sequelize("todo-db","postgres","shadowbelle2", {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = applicationSequelizeObject;
