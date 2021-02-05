module.exports = (client) => {
    client.on('message', message => {
        const invite = 'discord.gg'
        const { member, content } = message
        for (var i = 0; i < invite.length; i++) {
            if (content.includes(invite[i])){  
                message.delete();
                break
            }
        }
    })
}