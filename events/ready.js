const { Names } = require ('./../database');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        Names.sync({force: true});
        console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};