module.exports = {
    commands: ['balance', 'bal'],
    maxArgs: 1,
    expectedArgs: '<@target user>',
    callback(message){
        const target = message.mentions.users.first() || message.author;
        const targetId = target.id;
        console.log('ID:', targetId);
    }
}