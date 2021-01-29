const { description } = require("./newhelp");

module.exports = {
    name: 'quote',
    description: 'shows quote',
    execute(client, message) {
        var quote = [
            '\"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.\"\n-Albert einstein',
            '\“Procrastination is the art of keeping up with yesterday.\” \n – Don Marquis.'
        ];
        var randomItem = quote[Math.floor(Math.random() * quote.length)];
        message.channel.send({
            embed: {
                color: randomColor,
                description: randomItem,
            }
        });
        console.log(`--quote`);
    }
}