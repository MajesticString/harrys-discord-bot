module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    commands: ['kick'],
    expectedArgs: '@user',
    permissionError: 'You need to be able to manage messages to use this command!',
    minArgs: '1',
    maxArgs: '1',
    permissions: ['KICK_MEMBERS'],
    callback(client, message, args) {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}