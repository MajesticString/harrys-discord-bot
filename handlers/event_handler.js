const fs = require('fs');

module.exports = (client, message, Discord) => {
    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));

        for(const file of event_files){
            const event = require(`../events/${file}`);
            const event_name = file.split('.')[0];
            client.on(event_name, event.bind(null, Discord, client));
        }
    }

    ['client', 'guild'].forEach(e => load_dir(e));
}