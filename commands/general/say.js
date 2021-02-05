const Harrybot = require("../../main");
const { callback } = require("../moderation/ban");

module.exports = {
    name: 'say',
    description: 'Says something on behalf of a user',
    commands: ['say'],
    permissionError: 'you need to be able to send messages',
    permissions: ['SEND_MESSAGES'],
    async callback(client, message, args) {
        if (!args[0]){
            message.reply('Please specify something to say.').then(msg => { msg.delete({ timeout: 5000 }) }).catch(console.error);
        } else {
            message.reply(args[0] + `\n-${message.author}`)
        }
        
    }
};