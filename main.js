const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');
const config = require('./config.json');
const ready = require('./events/ready');
const mongo = require('./mongo');
const { option } = require('yargs');
const Harrybot = require('./Harrybot')
const welcome = require('./misc/welcome');
const { EventEmitter } = require('events');
const antiAd = require('./moderation/anti-ad');
const Enmap = require('enmap');

const prefix = '--';

EventEmitter.defaultMaxListeners = 50

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', async () => {
    console.log('harrybot is online');
    client.user.setActivity("--help", {
        type: "PLAYING",
    });

    await mongo().then(mongoose => {
        try {
            console.log('connected to mongo')
        } finally {
            mongoose.connection.close();
        }
    })

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = dir => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file));
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file));
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }
    readCommands('commands')
    welcome(client);
});

let stats = {
    serverID: '738259551769460807',
    total: "772984741330288641",
    member: "772985190154108958",
    bots: "772985063880785940"
}

client.on('guildMemberAdd', member => {
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    if (!channel) return;
    let dmMessageOnJoin = new Discord.MessageEmbed()
        .setColor('#00d0ff')
        .setTitle(`Welcome, ${member.user.tag}`)
        .setDescription('Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!')
        .setThumbnail(`${member.user.avatarURL}`)
        .addFields(
            { name: `You are the ${member.guild.memberCount} member!` },
        );
    member.send(dmMessageOnJoin);
    channel.send(dmMessageOnJoin);
})

client.on('guildMemberRemove', member => {
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    // let dmMessageOnLeave = new Discord.MessageEmbed()
    //     .setColor('#ff0000')
    //     .setTitle(`why'd you leave, <@!${member}>?`)
    //     .setDescription('im nice, so here is an invite back into the server if you ever change your mind. [CLICK HERE](https://discord.gg/3krP396KWE)');
    if (!channel) return;
    let channelMessageOnLeave = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`${member.user.tag} left the server!`)
        .setThumbnail(`${member.user.avatarURL}`)
    channel.send(channelMessageOnLeave);
})

client.login(config.token);