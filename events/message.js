const { addName } = require('./../database.js');
module.exports = {
    name: 'message',
    execute(message){
      if(message.author.bot) {
        return;
      }

      switch(message.content.toLowerCase()) {
        case '!addname':
          addName();
          message.reply(`<@${message.author.id}>, I have added you to the database! You can now add your guild treasury transactions!`);
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