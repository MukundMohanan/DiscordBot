require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();


const shouldUnMute = (messageContent) => ['!speakup', 'vaythora', '!unmuteAll'].includes(messageContent)

client.login(process.env.BOT_TOKEN);

module.exports = (message) => {
    try {
        const channel = message.channel
        const members = channel.members
        if (shouldUnMute(message.content)) {
            members.forEach(member => {
                if(message.member.voice.channel.id){
                member.voice.setMute(false)
                //member.voice.setDeaf(false)
                }
            });
            message.channel.send('Unmuted All');
        }
    } catch (error) {
        console.log(error);
    }
        
}
