module.exports = {
    name: 'rr',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
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
 
        const yellowTeamEmoji = 'YOUR_EMOJI';
        const blueTeamEmoji = 'YOUR_EMOJI';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Color roles')
            .setDescription('React to change your name color\n\n'
                + `${yellowTeamEmoji} for yellow team\n`
                + `${blueTeamEmoji} for blue team`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
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
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   