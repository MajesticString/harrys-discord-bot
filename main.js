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
        type: "STREAMING",
        url: ""
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
        .setTitle(`Welcome, ${member}`)
        .setDescription('Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!');

    member.send(dmMessageOnJoin);
    channel.send(dmMessageOnJoin);
})

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    let dmMessageOnLeave = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`why'd you leave, ${member}?`)
        .setDescription('im nice, so here is an invite back into the server if you ever change your mind. [CLICK HERE](https://discord.gg/xNpJjpma3v)');
    if (!channel) return;
    let channelMessageOnLeave = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`${member} left the server!`)
    member.send(dmMessageOnLeave);
    channel.send(channelMessageOnLeave);
});



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        // message.channel.send('Pong!').then(sentMessage => {
        //     sentMessage.edit(setTimeout(() => { message.channel.send(`**Latency:** \`${Date.now() - message.createdTimestamp}ms\`\n**API Latency:** \`${Math.round(client.ws.ping)}ms\``); }, 500));

        // });
        client.commands.get('ping').run(message, args, Discord);


    } else if (command === 'quote') {
        var quote = [
            '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
            '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
        ];
        var color = [0xff9cee, 0xf6a6ff, 0xb28dff, 0x97a2ff, 0xaff8db, 0x6eb5ff, 0xffabab, 0xfff5ba, 0x85e3ff, 0xbffcc6];
        var randomColor = color[Math.floor(Math.random() * color.length)];
        var randomItem = quote[Math.floor(Math.random() * quote.length)];
        message.channel.send({embed: {
            color: randomColor,
            description: randomItem,
        }});
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
    }


})

client.on('guildBanAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'log')
    if (!channel) return;
    let banEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`${member} has been banned.`)
    channel.send(banEmbed);
})



client.login(process.env.DISCORD_TOKEN);