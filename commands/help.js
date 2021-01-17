module.exports = {
    name: 'help',
    description: 'Help command',
}
module.exports.run = async message => {
    const helpEmbed = {
        color: "#FFFFFF",
        title: "Command Help",
        description: "I've sent you a help DM and a message in this channel.",
        fields: [
            {
                name: '```--help\n```',
                value: 'Help Command',
            },
            {
                name: '```--quote\n```',
                value: 'Shows an inspirational quote',
            },
            {
                name: '```--ping```',
                value: 'Shows latency of the bot',
            }
        ]
    }
    
    message.author.send({ embed: helpEmbed });
    const helpMessage = await message.channel.send({embed: helpEmbed});
    return helpMessage.edit("hello");
}