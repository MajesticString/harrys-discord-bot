const { description } = require("./rr");

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message, args) {
        const helpEmbed = {
            color: "0xFFFFFF",
            title: "Command Help",
            author: {
                name: "harry bot",
                icon_url: "https://cdn.discordapp.com/avatars/696554549418262548/2bb8a109ba41c84b0aad8d9f0bafb948.png"
            },
            fields: [
                {
                    name: '```--help\n```',
                    value: 'Help Command',
                },
                {
                    name: '```--quote\n```',
                    value: 'Shows an inspirational quote',
                },
                {
                    name: '```--ping```',
                    value: 'Shows latency of the bot',
                }
            ]
        }
        message.author.send({ embed: helpEmbed });
        
    }

}