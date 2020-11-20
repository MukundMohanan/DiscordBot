const invite = require('./invite');
const kick = require('./kick');
const poll = require('./poll');
const command = require('./command');
const muteAll = require('./muteAll');
const unmuteAll = require('./unmuteAll');

const PREFIX = "!";

const commands = {
    invite,
    kick,
    poll,
    command,
    muteAll,
    unmuteAll
}

var code = "NOT SET YET!";

module.exports = async (message) => {
    try {
        if(message.author.bot) return;
        if(message.guild.id === '765596878497644594' || message.guild.id === '755758571391549511'){
             if(message.content.toLowerCase() === 'md' || message.content.toLowerCase() === 'manish'){
                message.reply('You can trust him with your life!');
            }
            //console.log(message.guild.id,message.channel.id);
            //765596878497644594  , 765596878930444360

            //will use switch instead of if/else if
            else if(message.content.startsWith(PREFIX)) {
                const [CMD_NAME, ...args] = message.content.substring(1).trim().split(/\s+/);
                //console.log(CMD_NAME, args);
                
                if(CMD_NAME === 'invite'){
                    await commands[CMD_NAME](message);
                }
                else if(CMD_NAME === 'muteAll'){
                    await commands[CMD_NAME](message);
                }
                else if(CMD_NAME === 'unmuteAll'){
                    await commands[CMD_NAME](message);
                }
                else if(CMD_NAME === 'kick'){
                    if(!message.member.hasPermission(['KICK_MEMBERS'])) return message.reply('You dont have the premission to kick!');
                    await commands[CMD_NAME](message);
                }
                else if(CMD_NAME === 'codeis'){
                    code = args[0].toUpperCase();
                    console.log(code);
                }
                else if(CMD_NAME === 'poll'){
                    //console.log('poll triggered');
                    await commands[CMD_NAME](message);  
                }
                else if(CMD_NAME === 'command'){
                    //console.log("working");
                    await commands[CMD_NAME](message);
                }
            }
            else if(message.content.toLowerCase().includes('code')){
                message.reply(`The code is ${code}`);
            }
        }
        
    } catch (error) {
        console.log(error);
    }
    
}