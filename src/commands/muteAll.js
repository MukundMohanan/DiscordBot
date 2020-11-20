require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

// const { GuildChannel } = require('discord.js');
// const guildchannel = new GuildChannel();


const shouldMute = (messageContent) => ['!shutup', 'vaymoodu', '!muteAll'].includes(messageContent)

client.login(process.env.BOT_TOKEN);

module.exports = async (message) => {
    try {
        const channel = message.channel
        const members = channel.members
        //console.log("hi",message.member.voice.channel.id);
        //console.log(voicechannel.member);
        //console.log(channel.id,voicechannel.id);
        //console.log(message.content);
        if (shouldMute(message.content)) {
            await members.forEach(member => {
                //below if will check if the  member in voice channel or not
                if(message.member.voice.channel.id){
                //console.log("muting");
                member.voice.setMute(true)
                }
                //member.voice.setDeaf(true)
        });
            message.channel.send('Silenced All');
        }
    } catch (error) {
        if(error.message.includes('null')) message.channel.send('no one is in voice channel');
        else console.log('Promise error',error);
        //unhandled promise rejection warning: DiscordAPIError : Target user is not connected to voice
    }
        
}
