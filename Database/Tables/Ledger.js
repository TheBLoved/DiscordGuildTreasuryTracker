const { Names }  = require('./Names');
const { database, Sequelize } = require('./../database');

const Ledger = database.define('ledger', {
    week: {
        type: Sequelize.INTEGER
    },
    year: {
        type: Sequelize.INTEGER
    },
    value: {
        type: Sequelize.DOUBLE
    },
    valueWasSpent: {
        type: Sequelize.BOOLEAN
    }
});
Ledger.belongsTo(Names, {foreignKey: 'discordAccountId'});

module.exports = {
    Ledger: Ledger
};