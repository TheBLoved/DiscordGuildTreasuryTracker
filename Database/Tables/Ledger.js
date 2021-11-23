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
    }
});
Ledger.belongsTo(Names, {foreignKey: 'Name'});

module.exports = {
    Ledger: Ledger
};