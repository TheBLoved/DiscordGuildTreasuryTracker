const { addName } = require('./../Database/Commands/addName');
const { logMoney } = require('./../Database/Commands/logMoney');
const { logSpending } = require('./../Database/Commands/logSpending');
const { checkWeek } = require('./../Database/Commands/checkWeek');
const { checkSpending } = require('./../Database/Commands/checkSpending');
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
        case '!logdonation':
          try{
            logMoney(stringToDouble(args), message.author.id).then(log => {
              message.reply(`<@${log.dataValues.discordAccountId}>, I have logged your ${log.dataValues.value} gold!`);
            }).catch (e => {
              message.reply(`<@${message.author.id}>, ${e}.`);
            });
          } catch (e) {
            message.reply(`<@${message.author.id}>, ${e}.`);
          }
          break;
        case '!ledgerhelp':
          message.reply('Use "!addname" to initally register to the guild ledger\nUse "!logdonation {value}" to log your weekly donations to the guild bank\nUse "!logspending {value} {reason}" to record if you spend money in the bank.\nUse "!checkweek to see who hasn\'t paid in the current week.\nUse "!ledgerhelp" to see this message');
          break;
        case '!logspending':
          try {
            const [value, reason] = args.split(/ (.+)/);
            if (reason === undefined) {
              throw 'please enter a reason for spending the gold, e.g. "!logspending 1000 Upgrading repeaters to teir 3"';
            }
            logSpending(stringToDouble(value), message.author.id, reason).then(log => {
              message.reply(`<@${log.dataValues.discordAccountId}>, I have logged your ${log.dataValues.value} gold spent, for reason: "${reason}"!`);
            }).catch (e => {
              message.reply(`<@${message.author.id}>, ${e}.`)
            });
          } catch (e) {
            message.reply(`<@${message.author.id}>, ${e}.`)
          }
          break;
        case '!checkweek':
          checkWeek().then(namesNotPaid => {
            if (namesNotPaid.length === 0) {
              message.reply('Everyone on the Ledger has paid this week!');
            } else {
              let replyString = 'The following people have not yet paid this week:\n';
              for (nameId of namesNotPaid) {
                replyString = replyString.concat(`\n\t- <@${nameId}>`);
              }
              message.reply(replyString);
            }
          }).catch (e => {
            message.reply(`<@${message.author.id}>, ${e}.`)
          });
          break;
        case '!checkspending':
          checkSpending().then(week => {
            if (week.length === 0) {
              message.reply('Nothing has been spent this week.');
            } else {
              let replyString = 'The following costs have been spent this week:\n';
              for (transaction of week) {
                replyString = replyString.concat(`\n\t- Spender: <@${transaction.discordAccountId}>\t\t\tCost: ${transaction.value}\t\t\tReason: ${transaction.reasonForSpending}`);
              }
              message.reply(replyString);
            }
          }).catch (e => {
            message.reply(`<@${message.author.id}>, ${e}.`)
          });
          break;
        default:
          return;
      }
  } 
}