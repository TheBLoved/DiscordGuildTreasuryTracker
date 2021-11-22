// database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'sqlite',
                                process.env.DB_USER || 'sqlite',
                                process.env.DB_PASSWORD || '',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'sqlite',
                                    logging: false,
                                    storage: 'database.sqlite'
                                });
const Names = sequelize.define('names', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
})

const addName = () => {
console.log('name added');
}

module.exports = {
    sequelize: sequelize,
    Names: Names,
    addName: addName
};