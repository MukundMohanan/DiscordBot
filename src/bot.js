require('dotenv').config();

const commandHandler = require('./commands');
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.username} bot logged in`);
    //console.log(client.voice);
});

client.on('message',commandHandler);