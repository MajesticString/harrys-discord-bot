
const mongo = require('../mongo')
const welcomeSchema = require('../schemas/welcome-schema')
const command = require('../commands/command-base');


module.exports = (client) => {
    command(client, 'setwelcome', async (message) => {
        const { member, channel, content } = message;

        if (!member.hasPermissions('ADMINISTRATOR')) {
            channel.send('You do not have the correct permissions to run this command!').then(msg => {message.delete({ timeout: 5000})}).catch(console.error);
            return
        }
    
        await mongo().then(async (mongoose) => {
            try {
                await new welcomeSchema({
                    _id: guild.id,
                    channelId: channel.id,
                    text: content,
                }).save()
            } finally {
                mongoose.connection.close();
            }
        })
    
    })
}