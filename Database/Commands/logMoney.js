const { Ledger } = require('./../Tables/Ledger');
const { getCurrentWeek } = require('./../../conversions');

const logMoney = async (value, discordAccountId) => {
    try {
        const log = await Ledger.create({
            week: getCurrentWeek(),
            year: new Date().getFullYear(),
            value: value,
            discordAccountId: discordAccountId
        });
        return log;
    } catch (e) {
        if (e.name === 'SequelizeForeignKeyConstraintError') {
            throw('that name hasn\'t been added to the Ledger yet, please add with "!addname"');
        } else {
            throw('something unexpected has happened, please alert bot owner if it happens again');
        }
    }
};

module.exports = {
    logMoney: logMoney,
};