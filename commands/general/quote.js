const Harrybot = require("../../main");

module.exports = {
    name: 'quote',
    description: 'shows quote',
    command: ['quote', 'q', 'inspiration', 'inspire'],
    permissionError: 'You need to be able to send messages.',
    permissions: ['SEND_MESSAGES'],
    callback(client, message){
        var quote = [
            '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
            '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
        ];
        var randomItem = quote[Math.floor(Math.random() * quote.length)];
        message.channel.send({
            embed: {
                color: Harrybot.randomColor,
                description: randomItem,
            }
        });
        console.log(`--quote`);
    }
}