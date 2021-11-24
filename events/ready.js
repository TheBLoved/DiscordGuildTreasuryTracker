const { Ledger } = require('./../Database/Tables/Ledger');
const { Names } = require('./../Database/Tables/Names');
const { Spending } = require('./../Database/Tables/Spending');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        //remove force:true before releasing, it resets the DB every launch
        Ledger.sync({force: true});
        Names.sync({force: true});
        Spending.sync({force: true});
        console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};