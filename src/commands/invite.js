require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

module.exports = (message) => {
    client.fetchInvite('https://discord.gg/EmNtRGBMNp')
        .then(invite => message.channel.send(`https://discord.gg/${invite.code}`))
        .catch(console.error);
}
