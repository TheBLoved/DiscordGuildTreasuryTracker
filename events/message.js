const { addName } = require('./../Database/Commands/addName');
const { logMoney } = require('./../Database/Commands/logMoney');
const { stringToDouble } = require('./../conversions');

module.exports = {
    name: 'message',
    execute(message){
      if(message.author.bot) {
        return;
      }
      const [command, args] = message.content.split(/ (.+)/);
      switch(command) {
        case '!addname':                 
          addName(message.author.id, message.author.username).then(name => {     
            message.reply(`<@${name.dataValues.discordAccountId}>, I have added you to the Ledger as ${name.dataValues.discordName}. You can now add your guild treasury transactions!`);
          }).catch (e => {
            message.reply(`<@${message.author.id}>, ${e}.`);
          });
          break;
        case '!logmoney':
          logMoney(stringToDouble(args), message.author.id).then(log => {
            message.reply(`<@${log.dataValues.discordAccountId}>, I have logged your ${log.dataValues.value} gold!`);
          }).catch (e => {
            message.reply(`<@${message.author.id}>, ${e}.`);
          });
          break;
        case '!getweek':
          getweek();
          break;
        case '!recenttransactions':
          recentTransactions();
          break;
        default:
          return;
      }
  } 
}