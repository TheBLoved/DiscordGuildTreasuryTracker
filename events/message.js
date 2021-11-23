const { addName, logMoney } = require('./../Database/database');
const { stringToInt } = require('./../conversions');

module.exports = {
    name: 'message',
    execute(message){
      if(message.author.bot) {
        return;
      }
      const command = message.content.split(' ');
      switch(command[0]) {
        case '!addname':
          addName();
          message.reply(`<@${message.author.id}>, I have added you to the Ledger. You can now add your guild treasury transactions!`);
          break;
        case '!logmoney':
          try {    
            logMoney(stringToInt(command[1]));
            message.reply(`<@${message.author.id}>, I have logged your ${command[1]} gold!`);
          } catch (e) {
            message.reply(`<@${message.author.id}>, ${e}.`);
          }
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