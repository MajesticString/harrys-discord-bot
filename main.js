const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const token = "NzkyOTAxMTI3MTExNzA0NjA3.X-kcuA.kxjVLsaml7MYXoBRDijC7Apk_IY"

const prefix = '--';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('harrybot is online');
    client.user.setActivity("--help", { type: "PLAYING" });
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

    channel.send(`Welcome, ${member}! Please read the rules in [#rules](https://discord.com/channels/738259551769460807/742089240610996274), and maybe pick up some roles in [#roles](https://discord.com/channels/738259551769460807/755492029408084088)!`);
    
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(channel => channel.name === 'joins')
    if (!channel) return;

    message.channel.send(`${member} just left the server! :frowning2:`);
});



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!').then(sentMessage => {
            sentMessage.edit(setTimeout(() => { message.channel.send(`**Latency:** \`${Date.now() - message.createdTimestamp}ms\`\n**API Latency:** \`${Math.round(client.ws.ping)}ms\``); }, 500));
        });


    } else if (command === 'quote') {
        var quote = [
            '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
            '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
        ];
        var randomItem = quote[Math.floor(Math.random() * quote.length)];
        message.channel.send(randomItem);
    } else if (command === 'rr') {
        client.commands.get('rr').execute(message, args, Discord, client)
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'unban') {
        client.commands.get('unban').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
        message.channel.send('I sent you a help DM!');
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


client.login(token);