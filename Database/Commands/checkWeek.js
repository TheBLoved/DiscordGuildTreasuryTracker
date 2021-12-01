const { Ledger } = require('./../Tables/Ledger');
const { Names } = require('./../Tables/Names');
const { getCurrentWeek } = require('./../../conversions');

const checkWeek = async () => {
    try {
        let names = await Names.findAll({
            attributes: [ 'discordAccountId' ] 
        });
        let week = await Ledger.findAll({
            attributes: [ 'discordAccountId' ],
            where: {
                week: getCurrentWeek()
            }
        });
        names = names.map(name => {
            return name.dataValues.discordAccountId;
        });
        week = week.map(name => {
            return name.dataValues.discordAccountId;
        });
        return names.filter(name => {
            return week.indexOf(name) < 0;
        });
    } catch (e) {    
        throw('something unexpected has happened, please alert bot owner if it happens again');
    }
};

module.exports = {
    checkWeek: checkWeek,
};