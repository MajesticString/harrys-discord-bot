module.exports = {
    name: 'rr',
    description: "Sets up a reaction role message!",
    commands: ['rr', 'reactionrole'],
    permissionError: 'YOU NEED ADMIN LOL',
    permissions: ['ADMINISTRATOR'],
    async callback(message, args, Discord, client) {
        const channel = 'roles';
        const redRole = message.guild.roles.cache.find(role => role.name === "Red");
        const orangeRole = message.guild.roles.cache.find(role => role.name === "Orange");
        const yellowRole = message.guild.roles.cache.find(role => role.name === "Yellow");
        const greenRole = message.guild.roles.cache.find(role => role.name === "Green");
        const blueRole = message.guild.roles.cache.find(role => role.name === "Blue");
        const purpleRole = message.guild.roles.cache.find(role => role.name === "Purple");
        const brownRole = message.guild.roles.cache.find(role => role.name === "Brown");
        const whiteRole = message.guild.roles.cache.find(role => role.name === "White");
        const blackRole = message.guild.roles.cache.find(role => role.name === "Black");
 
        const redEmoji = '🔴';
        const orangeEmoji = '🟠';
        const yellowEmoji = '🟡';
        const greenEmoji = '🟢';
        const blueEmoji = '🔵';
        const purpleEmoji = '🟣';
        const brownEmoji = '🟤';
        const whiteEmoji = '⚪';
        const blackEmoji = '⚫';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Color roles')
            .setDescription('React to change your name color\n\n');
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redEmoji);
        messageEmbed.react(orangeEmoji);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(greenEmoji);
        messageEmbed.react(blueEmoji);
        messageEmbed.react(purpleEmoji);
        messageEmbed.react(brownEmoji);
        messageEmbed.react(whiteEmoji);
        messageEmbed.react(blackEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redRole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeRole);
                }
                if (reaction.emoji.name === yellowEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowRole);
                }
                if (reaction.emoji.name === greenEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenRole);
                }
                if (reaction.emoji.name === blueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueRole);
                }
                if (reaction.emoji.name === purpleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleRole);
                }
                if (reaction.emoji.name === brownEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(brownRole);
                }
                if (reaction.emoji.name === whiteEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteRole);
                }
                if (reaction.emoji.name === blackEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blackRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redRole);
                }
                if (reaction.emoji.name === orangeEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeRole);
                }
                if (reaction.emoji.name === yellowEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowRole);
                }
                if (reaction.emoji.name === greenEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenRole);
                }
                if (reaction.emoji.name === blueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueRole);
                }
                if (reaction.emoji.name === purpleEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleRole);
                }
                if (reaction.emoji.name === brownEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(brownRole);
                }
                if (reaction.emoji.name === whiteEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteRole);
                }
                if (reaction.emoji.name === blackEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blackRole);
                }
            } else {
                return;
            }
        });
    }
 
}   