module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    commands: 'ban',
    expectedArgs: '@user',
    permissionError: 'You need moderator perms',
    minArgs: '1',
    maxArgs: '1',
    permissions: ['BAN_MEMBERS'],
    callback(client, message, args, text) {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been baned");
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}