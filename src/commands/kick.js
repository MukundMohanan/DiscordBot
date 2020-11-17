module.exports = async (message) => {
    let member = message.mentions.members.first();
    //console.log(member);
    member.kick()
        .then((member) => {
            message.channel.send(`${member} is kicked by ${message.author}`);
        })
}