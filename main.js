const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const queue = new Map();
const prefix = '--';
const ytdl = require("ytdl-core");
const fs = require('fs');

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

// client.once('ready', () => {
//     console.log('harrybot is online');
//     client.user.setActivity("--help", { type: "PLAYING" });
// });


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
//         .setTitle(`Welcome, ${member}`)
//         .setDescription('Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!');

//     member.send(dmMessageOnJoin);
//     channel.send(dmMessageOnJoin);
// })

// client.on('guildMemberRemove', member => {
//     const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
//     let dmMessageOnLeave = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`why'd you leave, ${member}?`)
//         .setDescription('im nice, so here is an invite back into the server if you ever change your mind. [CLICK HERE](https://discord.gg/xNpJjpma3v)');
//     if (!channel) return;
//     let channelMessageOnLeave = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`${member} left the server!`)
//     member.send(dmMessageOnLeave);
//     channel.send(channelMessageOnLeave);
// });



// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command === 'ping') {
//         // message.channel.send('Pong!').then(sentMessage => {
//         //     sentMessage.edit(setTimeout(() => { message.channel.send(`**Latency:** \`${Date.now() - message.createdTimestamp}ms\`\n**API Latency:** \`${Math.round(client.ws.ping)}ms\``); }, 500));

//         // });
//         client.commands.get('ping').run(message, args);


//     } else if (command === 'quote') {
//         var quote = [
//             '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
//             '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
//         ];
//         var randomItem = quote[Math.floor(Math.random() * quote.length)];
//         message.channel.send(randomItem);
//     } else if (command === 'rr') {
//         client.commands.get('rr').execute(message, args, Discord, client)
//     } else if (command === 'kick') {
//         client.commands.get('kick').execute(message, args);
//     } else if (command === 'ban') {
//         client.commands.get('ban').execute(message, args);
//     } else if (command === 'unban') {
//         client.commands.get('unban').execute(message, args);
//     } else if (command === 'help') {
//         client.commands.get('help').run(message, args);
//     } else if (command === 'clear') {
//         client.commands.get('clear').execute(message, args);
//     }


// })

// client.on('guildBanAdd', member => {
//     const channel = member.guild.channels.cache.find(channel => channel.name === 'log')
//     if (!channel) return;
//     let banEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`${member} has been banned.`)
//     channel.send(banEmbed);
// })
// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     switch (args[0]) {
//         case 'play':

//             function play(connection, message) {
//                 var server = servers[message.guild.id];

//                 server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter: 'audioonly' }));
//                 server.queue.shift();
//                 server.dispatcher.on("end", function () {
//                     if (server.queue[0]) {
//                         play(connection, message);
//                     } else {
//                         connection.disconnect();
//                     }
//                 });

//             }

//             if (!args[1]) {
//                 message.channel.send("you need to provide a link");
//                 return;
//             }
//             if (!message.member.voiceChannel) {
//                 message.channel.send("you must be in a channel to play the bot !");
//                 return;
//             }

//             if (!servers[message.guild.id]) servers[message.guild.id] = {
//                 queue: []
//             }
//             var server = servers[message.guild.id];

//             server.queue.push(args[1]);

//             if (!message.guild.voiceConnection)
//                 message.member.voiceChannel.join().then(function (connection) {
//                     play(connection, message);
//                 })

//             break;
//         case 'skip':
//             var server = servers[message.guild.id];
//             if (server.dispatcher) server.dispatcher.end();
//             message.channel.send("song skipped")
//             break;

//         case 'stop':
//             var server = servers[message.guild.id];
//             if (message.guild.voiceConnection) {
//                 for (var i = server.queue.length - 2; i >= 0; i--) {
//                     server.queue.splice(i, 1);
//                 }
//                 server.dispatcher.end();
//                 message.channel.send("Ending the queue leaving the voice channel")
//                 console.log('stopped the queue')
//             }
//             if (message.guild.connection) message.guild.voiceConnection.disconnect();

//             break;
//     }
// })


// client.on("message", async message => {
//     if (message.author.bot) return;
//     if (!message.content.startsWith(prefix)) return;
  
//     const serverQueue = queue.get(message.guild.id);
  
//     if (message.content.startsWith(`${prefix}play`)) {
//       execute(message, serverQueue);
//       return;
//     } else if (message.content.startsWith(`${prefix}skip`)) {
//       skip(message, serverQueue);
//       return;
//     } else if (message.content.startsWith(`${prefix}stop`)) {
//       stop(message, serverQueue);
//       return;
//     } else {
//       message.channel.send("You need to enter a valid command!");
//     }
//   });
  
//   async function execute(message, serverQueue) {
//     const args = message.content.split(" ");
  
//     const voiceChannel = message.member.voice.channel;
//     if (!voiceChannel)
//       return message.channel.send(
//         "You need to be in a voice channel to play music!"
//       );
//     const permissions = voiceChannel.permissionsFor(message.client.user);
//     if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
//       return message.channel.send(
//         "I need the permissions to join and speak in your voice channel!"
//       );
//     }
  
//     const songInfo = await ytdl.getInfo(args[1]);
//     const song = {
//           title: songInfo.videoDetails.title,
//           url: songInfo.videoDetails.video_url,
//      };
  
//     if (!serverQueue) {
//       const queueContruct = {
//         textChannel: message.channel,
//         voiceChannel: voiceChannel,
//         connection: null,
//         songs: [],
//         volume: 5,
//         playing: true
//       };
  
//       queue.set(message.guild.id, queueContruct);
  
//       queueContruct.songs.push(song);
  
//       try {
//         var connection = await voiceChannel.join();
//         queueContruct.connection = connection;
//         play(message.guild, queueContruct.songs[0]);
//       } catch (err) {
//         console.log(err);
//         queue.delete(message.guild.id);
//         return message.channel.send(err);
//       }
//     } else {
//       serverQueue.songs.push(song);
//       return message.channel.send(`${song.title} has been added to the queue!`);
//     }
//   }
  
//   function skip(message, serverQueue) {
//     if (!message.member.voice.channel)
//       return message.channel.send(
//         "You have to be in a voice channel to stop the music!"
//       );
//     if (!serverQueue)
//       return message.channel.send("There is no song that I could skip!");
//     serverQueue.connection.dispatcher.end();
//   }
  
//   function stop(message, serverQueue) {
//     if (!message.member.voice.channel)
//       return message.channel.send(
//         "You have to be in a voice channel to stop the music!"
//       );
      
//     if (!serverQueue)
//       return message.channel.send("There is no song that I could stop!");
      
//     serverQueue.songs = [];
//     serverQueue.connection.dispatcher.end();
//   }
  
//   function play(guild, song) {
//     const serverQueue = queue.get(guild.id);
//     if (!song) {
//       serverQueue.voiceChannel.leave();
//       queue.delete(guild.id);
//       return;
//     }
  
//     const dispatcher = serverQueue.connection
//       .play(ytdl(song.url))
//       .on("finish", () => {
//         serverQueue.songs.shift();
//         play(guild, serverQueue.songs[0]);
//       })
//       .on("error", error => console.error(error));
//     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
//     serverQueue.textChannel.send(`Start playing: **${song.title}**`);
//   }


client.login(process.env.DISCORD_TOKEN);