const { Spending } = require('./../Tables/Spending');
const { getCurrentWeek } = require('./../../conversions');

const logSpending = async (value, discordAccountId, reason) => {
    try {
        const log = await Spending.create({
            week: getCurrentWeek(),
            year: new Date().getFullYear(),
            value: value,
            discordAccountId: discordAccountId,
            reasonForSpending: reason
        });
        return log;
    } catch (e) {
        if (e.name === 'SequelizeForeignKeyConstraintError') {
            throw('your name hasn\'t been added to the Ledger yet, please add with "!addname"');
        } else {
            throw('something unexpected has happened, please alert bot owner if it happens again');
        }
    }
};

module.exports = {
    logSpending: logSpending,
};