require('dotenv').config();

const commandHandler = require('./commands');
const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.username} bot logged in`);
});

client.on('message',commandHandler);