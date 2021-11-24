const { Names } = require('./../Tables/Names');

const addName = async (discordAccountId, discordName) => {
    try {
        const name = await Names.create({
            discordAccountId: discordAccountId,
            discordName: discordName
        });
        return name;
    } catch (e) {
        if (e.name === 'SequelizeUniqueConstraintError') {
            throw('that name has already been added to the Ledger');
        } else {
            throw('something unexpected has happened, please alert bot owner if it happens again');
        }
    }
};

module.exports = {
    addName: addName,
};