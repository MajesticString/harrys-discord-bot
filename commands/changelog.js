const { description } = require("./leave");

module.exports = {
    name: 'changelog',
    description: 'A full changelog of harrybot',
    excecute(message, args){
        message.channel.send({embed: {
            title: 'Full Changelog:',
            fields: [
                {
                    name: 'v. 0.5',
                    
                }
            ]
        }})
    }
}