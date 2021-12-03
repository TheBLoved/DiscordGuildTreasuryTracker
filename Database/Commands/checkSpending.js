const { Spending } = require('./../Tables/Spending');
const { getCurrentWeek } = require('./../../conversions');

const checkSpending = async () => {
    try {
        let week = await Spending.findAll({
            attributes: [ 'discordAccountId', 'value', 'reasonForSpending' ],
            where: {
                week: getCurrentWeek(),
                year: new Date().getFullYear()
            }
        });
        return week.map(week => {
            return week.dataValues;
        });
        
    } catch (e) {    
        throw('something unexpected has happened, please alert bot owner if it happens again');
    }
};

module.exports = {
    checkSpending: checkSpending,
};