const { database, Sequelize } = require('./../database');

const Names = database.define('names', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
    }
});

module.exports = {
    Names: Names
};