module.exports = {
    name: 'clear',
    description: "Clear messages!",
    commands: ['c', 'clear'],
    expectedArgs: '<num>',
    permissionError: "You need to be able to manage messages to use this command",
    minArgs: '1',
    maxArgs: '1',
    permissions: ['MANAGE_MESSAGES'],
    async callback(client, message, args, text) {
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
                message.channel.bulkDelete(messages).then(message.reply(`${args[0]} messages deleted.`).then(msg => {msg.delete({timeout: 5000})}))
            });

    }
}   