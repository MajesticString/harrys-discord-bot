const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const config = require('./config.json')

// const queue = new Map();
// const prefix = '--';
// const ytdl = require("ytdl-core");
// const { send } = require('process');
// const { toLowerCase } = require('ffmpeg-static');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command)
// }
// const prefix = '--';
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const cmd = args.shift().toLowerCase();
//     const command = client.commands.get(cmd);

//     if (command) command.execute(client, args, message, Discord)


// client.once('ready', () => {
//     console.log('harrybot is online');
//     client.user.setActivity("--help", {
//         type: "PLAYING",
//     });
// });

// var color = [0x00c09a, 0x008369, 0x00d166, 0x008e44, 0x0099e1, 0x006798, 0xa652bb, 0x712f8f, 0xfd0061, 0xbc0057, 0xf8c300, 0xcc7900, 0xf93a2f, 0xa62019, 0x91a6a6, 0x969c9f, 0x597e8d, 0x4e6f7b];
// var randomColor = color[Math.floor(Math.random() * color.length)];
// var hexColor = ['#00c09a', '#008369', '#00d166', '#008e44', '#0099e1', '#006798', '#a652bb', '#712f8f', '#fd0061', '#bc0057', '#f8c300', '#cc7900', '#f93a2f', '#a62019', '#91a6a6', '#969c9f', '#597e8d', '#4e6f7b'];
// var randomHexColor = hexColor[Math.floor(Math.random() * hexColor.length)];

// let stats = {
//     serverID: '738259551769460807',
//     total: "772984741330288641",
//     member: "772985190154108958",
//     bots: "772985063880785940"
// }



// client.on('guildMemberAdd', member => {
//     if (member.guild.id !== stats.serverID) return;
//     client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
//     client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
//     client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
// })

// client.on('guildMemberRemove', member => {
//     if (member.guild.id !== stats.serverID) return;
//     client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
//     client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
//     client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
// })


// client.on('guildMemberAdd', member => {
//     const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
//     if (!channel) return;
//     let dmMessageOnJoin = new Discord.MessageEmbed()
//         .setColor('#00d0ff')
//         .setTitle(`Welcome, ${member.user.tag}`)
//         .setDescription('Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!')
//         .setThumbnail(`${member.user.avatarURL}`)
//         .addFields(
//             { name: `You are the ${member.guild.memberCount} member!` },
//         );
//     member.send(dmMessageOnJoin);
//     channel.send(dmMessageOnJoin);
// })

// client.on('guildMemberRemove', member => {
//     const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
//     // let dmMessageOnLeave = new Discord.MessageEmbed()
//     //     .setColor('#ff0000')
//     //     .setTitle(`why'd you leave, <@!${member}>?`)
//     //     .setDescription('im nice, so here is an invite back into the server if you ever change your mind. [CLICK HERE](https://discord.gg/3krP396KWE)');
//     if (!channel) return;
//     let channelMessageOnLeave = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`${member.user.tag} left the server!`)
//         .setThumbnail(`${member.user.avatarURL}`)
//     channel.send(channelMessageOnLeave);
// });



client.login(config.token);