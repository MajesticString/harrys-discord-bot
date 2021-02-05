module.exports = {
    name: 'changelog',
    description: 'A full changelog of harrybot',
    commands: ['changelog', 'github'],
    expectedArgs: '0',
    permissionError: 'You need to be able to send messages',
    minArgs: '0',
    maxArgs: '0',
    permissions: ['SEND_MESSAGES'],
    callback(client, message, Harrybot, args, text){
        message.author.send({
            embed: {
                title: 'Full Changelog:',
                color: Harrybot.randomColor,
                description: 'Source code: [https://github.com/MajesticString/harrys-discord-bot](https://github.com/MajesticString/harrys-discord-bot)\nHarrybot trailer: [https://youtube.com/watch?v=a7EjF98Sb](https://youtu.be/dQw4w9WgXcQ)',
                fields: [
                    {
                        name: 'v0.5',
                        value: 'Added music functionality\nAdded change log\nFixed username appearing as ID on join and leave\nMade embed colors better and more random'
                    }
                ]
            }
        });
        message.channel.send({embed: {color: Harrybot.randomColor, title: 'I DM\'ed you the full changelog', description: 'You can also go to <https://github.com/MajesticString/harrys-discord-bot> to find the source code, and changelog there as well.'}});
    }
}
