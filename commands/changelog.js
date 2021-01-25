const { description } = require("./leave");

module.exports = {
    name: 'changelog',
    description: 'A full changelog of harrybot',
    excecute(message, args){
        const changelog = { 
            title: 'Full Changelog:',
            description: 'Source code: [https://github.com/MajesticString/harrys-discord-bot](https://github.com/MajesticString/harrys-discord-bot)\nHarrybot trailer: []()',
            fields: [
                {
                    name: 'v0.5',
                    value: 'Added music functionality\nAdded change log\nFixed username appearing as ID on join and leave\nMade embed colors better and more random'
                }
            ]}
        message.author.send({embed: changelog});
        message.channel.send('I DM\'ed you the full changelog. You can also go to https://github.com/MajesticString/harrys-discord-bot to find the source code, and changelog there as well.');
    }
}