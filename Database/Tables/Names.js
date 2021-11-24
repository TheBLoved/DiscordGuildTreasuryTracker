const { database, Sequelize } = require('./../database');

const Names = database.define('names', {
    discordAccountId: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    discordName: {
        type: Sequelize.STRING
    }
});

module.exports = {
    Names: Names
};