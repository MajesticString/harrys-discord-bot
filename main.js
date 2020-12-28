const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '/';

client.once('ready', () => {
    console.log('harrybot is online');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    

})

client.login('NzkyOTAxMTI3MTExNzA0NjA3.X-kcuA.kxjVLsaml7MYXoBRDijC7Apk_IY')