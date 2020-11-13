require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "!";

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.username} bot logged in`);
});

client.on('message', (message) => {
    if(message.author.bot) return;
    if(message.content === 'mD'){
        message.reply('You can trust him with your life!');
    }
    if(message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.substring(1).trim().split(/\s+/);
        console.log(CMD_NAME, args);
        if(CMD_NAME === 'kick'){
            if(!message.member.hasPermission('KICK_MEMBERS')) return  message.reply('You do not have premission to use that command');
            if(args.length === 0) return message.reply('Provied an ID');
            const member = message.guild.members.cache.get(args[0]);
            if(member) {
                member.kick();
            } else {
                message.reply('That member was not found');
            }
        } else if(CMD_NAME === 'ban'){
            message.reply('The person is banned');
        }
    }
});