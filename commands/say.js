module.exports = {
    name: 'say',
    description: 'Says something on behalf of a user',
};
module.exports.execute = async message => {
    const args = message.content.slice('--'.length).split(/ +/);
    if(!args[0]) return message.reply('Please specify something to say.').then(msg => {msg.delete({timeout: 5000})}).catch(console.error);
    await message.channel.messages.fetch({limit: args[0]}).then(messages => {message.channel.send(messages)});
}