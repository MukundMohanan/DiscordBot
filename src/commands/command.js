const command = [
    'md', '!invite', '!kick', 'code', '!codeis'
]

module.exports = async (message) => {
    message.channel.send('The commands are \n md,\n !poll,\n !command,\n !invite,\n !muteAll,\n !unmuteAll,\n !kick,\n !codeis,\n code');
}