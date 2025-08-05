const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, //Database Name
    process.env.DB_USER, //Database Username
    process.env.DB_PASS, //Database Password

    {
       dialect: 'postgres',
       host: process.env.DB_HOST, //Database Hostname
       port: process.env.DB_PORT  //Database Port
    }
    
    
)