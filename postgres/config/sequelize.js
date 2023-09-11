const dbConfig = require("./config.json");
const Sequelize = require('sequelize')
// const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
//     host: dbConfig.host,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,

//     // pool: {
//     //     max: dbConfig.pool.max,
//     //     min: dbConfig.pool.min,
//     //     acquire: dbConfig.pool.acquire,
//     //     idle: dbConfig.pool.idle
//     // }

// });
const sequelize = new Sequelize({
    dialect: 'postgres', // Replace 'postgres' with your actual dialect
    username: 'postgres',
    password: 'root',
    database: 'Users',
    host: 'localhost',
    port: 5432, // Replace with your database port
});


module.exports = sequelize;