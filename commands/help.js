module.exports = {
    name: 'help',
    description: 'Help command',
}
module.exports.run = async message => {
    console.log(`--help`)
    var color = [0x00c09a, 0x008369, 0x00d166, 0x008e44, 0x0099e1, 0x006798, 0xa652bb, 0x712f8f, 0xfd0061, 0xbc0057, 0xf8c300, 0xcc7900, 0xf93a2f, 0xa62019, 0x91a6a6, 0x969c9f, 0x597e8d, 0x4e6f7b];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    const helpEmbed = {
        color: randomColor,
        title: "Command Help",
        description: "I've sent you a help DM and a message in this channel.\n",
        fields: [
            {
                name: '**General Commands**',
                value: '\u200b',
                
            },
            {
                name: '```--help```',
                value: 'Help Command',
                inline: true
            },
            {
                name: '```--quote```',
                value: 'Shows an inspirational quote',
                inline: true
            },
            {
                name: '```--ping```',
                value: 'Shows latency of the bot\n',
                inline: true
            },
            {
                name: '**Music Commands**',
                value: '\u200b',
                
            },
            {
                name: '`--play <song name>`',
                value: 'Plays a song (You must be in a voice channel, and that song must be on YouTube for this to work)',
                inline: true
            },
            {
                name: '`--stop` or `--leave`',
                value: 'The bot will stop the song and leave the voice channel.',
                inline: true
            }

        ]
    }
    
    message.author.send({ embed: helpEmbed });
    const helpMessage = await message.channel.send({embed: helpEmbed});
    return helpMessage.edit("hello");
}