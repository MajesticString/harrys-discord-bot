module.exports = {
    name: 'changelog',
    description: 'A full changelog of harrybot',
    execute(client, message, randomColor) {
        message.author.send({
            embed: {
                title: 'Full Changelog:',
                color: randomColor,
                description: 'Source code: [https://github.com/MajesticString/harrys-discord-bot](https://github.com/MajesticString/harrys-discord-bot)\nHarrybot trailer: [https://youtube.com/watch?v=a7EjF98Sb](https://youtu.be/dQw4w9WgXcQ)',
                fields: [
                    {
                        name: 'v0.5',
                        value: 'Added music functionality\nAdded change log\nFixed username appearing as ID on join and leave\nMade embed colors better and more random'
                    }
                ]
            }
        });
        message.channel.send({embed: {color: randomColor, title: 'I DM\'ed you the full changelog', description: 'You can also go to <https://github.com/MajesticString/harrys-discord-bot> to find the source code, and changelog there as well.'}});
    }
}
