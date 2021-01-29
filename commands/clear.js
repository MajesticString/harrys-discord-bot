module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(client, message, args) {
        if (message.member.roles.cache.find(r => r.name === "Owner") || message.member.roles.find(r => rname === "Moderator")) {
            if (!args[0]) return message.reply("Please enter the amount of messages to clear!").then(msg => {
                msg.delete({ timeout: 5000 })
            }).catch(console.error);;

            if (isNaN(args[0])) return message.reply("Please type a real number!").then(msg => {
                msg.delete({ timeout: 5000 })
            }).catch(console.error);

            if (args[0] > 100) return message.reply("You can't remove more than 100 messages!").then(msg => {
                msg.delete({ timeout: 5000 })
            }).catch(console.error);

            if (args[0] < 1) return message.reply("You have to delete at least one message!").then(msg => {
                msg.delete({ timeout: 5000 })
            }).catch(console.error);;

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages)
            });
        } else {
            message.reply('You don\'t have the proper permissions!');
        }


    }
}   