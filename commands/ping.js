module.exports = {
    name: 'ping',
    description: 'this is a ping command.',
};
module.exports.run = async message => {
    const m = await message.channel.send("〽️ Pinging...");
    return m.edit(`🏓\nServer latency is \`${m.createdTimestamp - message.createdTimestamp}ms\`\nAPI latency is \`${Math.round(message.client.ws.ping)}ms\`\nUptime is \`${message.client.uptime}ms\`.`);
};