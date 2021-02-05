module.exports = {
    name: 'message',
    description: 'message event',
    execute(client, Discord, message, command, commands, Harrybot) {
        if (!message.content.startsWith(Harrybot.prefix) || message.author.bot) return;

        const args = message.content.slice(Harrybot.prefix.length).trim().split(/ +/);

        if (!client.commands.has(command)) return;

        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}   