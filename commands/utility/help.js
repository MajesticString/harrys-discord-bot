const recon = require('reconlx')
module.exports = {
    name: 'help',
    description: 'new help menu',
    commands: ['help', 'command', 'commands', 'newhelp', 'oldhelp'],
    callback(message, client, text, Harrybot, randomHexColor, Discord) {
        const { MessageEmbed } = require('discord.js');
        const general = new MessageEmbed()
            .setTitle('General Commands')
            .setColor('RED')
            .setAuthor('Made by Harry Allen', 'https://imgur.com/a/In0z2DE.jpeg', 'https://github.com/MajesticString/harrys-discord-bot')
            .setDescription('I\'ve sent you a help DM and a message in this channel.')
            .addFields(
                { name: '`--help`', value: 'Help command', inline: true },
                { name: '`--quote`', value: 'Shows an inspirational quote', inline: true },
                { name: '`--ping`', value: 'Shows latency and response time', inline: true },
                { name: '`--meme`', value: 'Gets a meme from Reddit', inline: true },
                { name: '`--say`', value: 'Makes harrybot say something on your behalf', inline: true },
                { name: '`--image <image name>`', value: 'Gets an image from Google', inline: true },
                { name: '`--changelog`', value: 'Shows harrybot\'s changelog', inline: true },
            )
            .setTimestamp()
        const music = new MessageEmbed()
            .setTitle('Music Commands')
            .setColor('RED')
            .setAuthor('Made by Harry Allen', 'https://imgur.com/a/In0z2DE.jpeg', 'https://github.com/MajesticString/harrys-discord-bot')
            .setDescription('I\'ve sent you a help DM and a message in this channel.')
            .addFields(
                { name: '`--play <song name>`', value: 'Plays a song from YouTube', inline: true },
                { name: '`--stop` or `--leave`', value: 'Stops the song and leaves the voice channel', inline: true },
            )
            .setTimestamp()
        const moderation = new MessageEmbed()
            .setTitle('Moderation Commands (MODERATORS ONLY)')
            .setColor('RED')
            .setAuthor('Made by Harry Allen', 'https://imgur.com/a/In0z2DE.jpeg', 'https://github.com/MajesticString/harrys-discord-bot')
            .setDescription('I\'ve sent you a help DM and a message in this channel.')
            .addFields(
                { name: '`--clear <# of messages>`', value: 'Clears messages from a channel', inline: true },
                { name: '`--kick <user>`', value: 'Kicks a user', inline: true },
                { name: '`--ban <user>`', value: 'Bans a user', inline: true },
            )
            .setTimestamp();
        
        const textPageChange = true;

        const emojis = ["⏪", "⏩"];

        const time = 60000;

        const pages = [
            general, music, moderation
        ]
        recon.ReactionPages(message, pages, textPageChange, emojis, time);
    }
}