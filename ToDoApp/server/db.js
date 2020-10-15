const Sequelize = require("sequelize");

const applicationSequelizeObject = new Sequelize("todo-db","postgres","qazwsxedc", {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = applicationSequelizeObject;
