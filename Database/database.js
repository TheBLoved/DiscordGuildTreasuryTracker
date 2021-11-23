// database.js

const Sequelize = require('sequelize');
const database = new Sequelize(process.env.DB_SCHEMA || 'sqlite',
                                process.env.DB_USER || 'sqlite',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'sqlite',
                                    logging: false,
                                    storage: 'database.sqlite'
                                });

const addName = () => {
    console.log('name added');
};

const logMoney = (value) => {
    console.log(`${value} gold logged`);
};

module.exports = {
    database: database,
    Sequelize: Sequelize,
    addName: addName,
    logMoney: logMoney,
};