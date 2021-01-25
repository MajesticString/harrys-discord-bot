const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const queue = new Map();
const prefix = '--';
const ytdl = require("ytdl-core");
const fs = require('fs');

client.commands = new Discord.Collection();
// client.events = new Discord.Collection();


// ['command_handler', 'event_handler'].forEach(handler => {
//   require(`./handlers/${handler}`)(client, Discord);
// })
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('harrybot is online');
    client.user.setActivity("--help", {
        type: "PLAYING",
      });
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
})

client.on('guildMemberRemove', member => {
    if (member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    if (!channel) return;
    let dmMessageOnJoin = new Discord.MessageEmbed()
        .setColor('#00d0ff')
        .setTitle(`Welcome, ${member.user.tag}`)
        .setDescription('Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!')
        .addFields(
            {name: `You are the ${member.guild.memberCount} member!`},
        );
    member.send(dmMessageOnJoin);
    channel.send(dmMessageOnJoin);
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    // let dmMessageOnLeave = new Discord.MessageEmbed()
    //     .setColor('#ff0000')
    //     .setTitle(`why'd you leave, <@!${member}>?`)
    //     .setDescription('im nice, so here is an invite back into the server if you ever change your mind. [CLICK HERE](https://discord.gg/3krP396KWE)');
    if (!channel) return;
    let channelMessageOnLeave = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`${member.user.tag} left the server!`)
    channel.send(channelMessageOnLeave);
});



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').run(message, args, Discord);
    } else if (command === 'quote') {
        var quote = [
            '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
            '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
        ];
        var color = [0x00c09a, 0x008369, 0x00d166, 0x008e44, 0x0099e1, 0x006798, 0xa652bb, 0x712f8f, 0xfd0061, 0xbc0057, 0xf8c300, 0xcc7900, 0xf93a2f, 0xa62019, 0x91a6a6, 0x969c9f, 0x597e8d, 0x4e6f7b];
        var randomColor = color[Math.floor(Math.random() * color.length)];

        var randomItem = quote[Math.floor(Math.random() * quote.length)];
        message.channel.send({embed: {
            color: randomColor,
            description: randomItem,
        }});
        console.log(`--quote`);
    } else if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Discord, client)
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'unban') {
        client.commands.get('unban').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').run(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'stop') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'skip') {
        var server = servers[message.guild.id];

        if(server.dispatcher) server.dispatcher.end();
        message.channel.send('Skipped!');
    } else if (command === ' '){
        message.channel.send('You can\'t have a space between the prefix and the command.')
    } else if (command === 'changelog') {
        message.channel.send('Changelog sent to DM\'s');
    } else {
        message.channel.send('this isn\'t even a command, what are you doing');
    }


})

client.on('guildBanAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'log')
    if (!channel) return;
    let banEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`${member.user.tag} has been banned.`)
    channel.send(banEmbed);
})



client.login(process.env.DISCORD_TOKEN);