const { Ledger } = require('./../Tables/Ledger');
const { getCurrentWeek } = require('./../../conversions');

const logMoney = async (value, discordAccountId, isSpending = false) => {
    try {
        const log = await Ledger.create({
            week: getCurrentWeek(),
            year: new Date().getFullYear(),
            value: value,
            discordAccountId: discordAccountId,
            valueWasSpent: isSpending
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
    logMoney: logMoney,
};