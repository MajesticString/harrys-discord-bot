module.exports = {
    name: 'ping',
    description: 'this is a ping command.',
};
module.exports.run = async message => {
    const pingEmbed = {
        color: 0x0099ff,
        title: '〽️ Pinging...',
    };

    const m = await message.channel.send({embed: pingEmbed});
    return m.edit({embed: {
        color: 0x0099ff,   
        title: `🏓`, 
        fields: [
            {
                name: 'Server latency',
                value: `\`${m.createdTimestamp - message.createdTimestamp}ms\``
            }, 
            {
                name: 'API latency:', 
                value: `\`${Math.round(message.client.ws.ping)}ms\``
            }, 
            {
                name: 'Uptime:', 
                value: `\`${message.client.uptime}ms\`.`,
            },
        ],
    }});
};