const { Names }  = require('./Names');
const { database, Sequelize } = require('./../database');

const Spending = database.define('spending', {
    week: {
        type: Sequelize.INTEGER
    },
    year: {
        type: Sequelize.INTEGER
    },
    value: {
        type: Sequelize.DOUBLE
    },
    reasonForSpending: {
        type: Sequelize.STRING
    }
});
Spending.belongsTo(Names, {foreignKey: 'discordAccountId'});

module.exports = {
    Spending: Spending
};