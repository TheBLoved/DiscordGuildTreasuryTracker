const { Ledger } = require ('./../Database/Tables/Ledger');
const { Names } = require ('./../Database/Tables/Names');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        Ledger.sync({force: true});
        Names.sync({force: true});
        console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};