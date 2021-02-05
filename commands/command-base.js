const { prefix } = require('../config.json');
const Harrybot = require('../Harrybot');
const Discord = require('discord.js')
const client = new Discord.Client();
const validatePermissions = (permissions) => {
    const validPermissions = [
        'CREATE_INSTANT_INVITE',
        'KICK_MEMBERS',
        'BAN_MEMBERS',
        'ADMINISTRATOR',
        'MANAGE_CHANNELS',
        'MANAGE_GUILD',
        'ADD_REACTIONS',
        'VIEW_AUDIT_LOG',
        'PRIORITY_SPEAKER',
        'STREAM',
        'VIEW_CHANNEL',
        'SEND_MESSAGES',
        'SEND_TTS_MESSAGES',
        'MANAGE_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
        'MENTION_EVERYONE',
        'USE_EXTERNAL_EMOJIS',
        'VIEW_GUILD_INSIGHTS',
        'CONNECT',
        'SPEAK',
        'MUTE_MEMBERS',
        'DEAFEN_MEMBERS',
        'MOVE_MEMBERS',
        'USE_VAD',
        'CHANGE_NICKNAME',
        'MANAGE_NICKNAMES',
        'MANAGE_ROLES',
        'MANAGE_WEBHOOKS',
        'MANAGE_EMOJIS',
    ]

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)) {
            throw new Error(`unkown permission node "${permission}"`)
        }
    }

}

module.exports = (client, commandOptions) => {
    let {
        commands,
        expectedArgs = '',
        permissionError = 'You do not have the right perms',
        minArgs = 0,
        maxArgs = null,
        permissions = [],
        requiredRoles = [],
        callback
    } = commandOptions;

    if (!commands) {
        return
    }

    if (typeof commands === 'string') {
        commands = [commands]
    };

    console.log(`Registering command ${commands[0]}`)

    if (permissions.length) {
        if (typeof permissions === 'string') {
            permissions = [permissions];
        };
    };
    client.on('message', (message) => {
        const { member, content, guild } = message;

        for (const alias of commands) {
            if (content.toLowerCase().startsWith(`${prefix}${alias.toLowerCase()}`)) {
                // a command has been ran

                // ensure use has right perms
                for (const permission of permissions) {
                    if (!member.hasPermission(permission)) {
                        message.reply(permissionError)
                        return
                    }
                }
                for (const requiredRole of requiredRoles) {
                    const role = guild.roles.cache.find(role =>
                        role.name === requiredRole)
                    if (!role || !member.roles.cache.has(role.id)) {
                        message.reply(`You must have the "${requiredRole}" role to use this command!`)
                        return
                    }
                }

                const args = content.split(/[ ]+/)

                args.shift()

                if (args.length < minArgs || (maxArgs !== null && args.length > maxArgs)) {
                    message.reply(`Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`)
                }


                callback(client, message, Discord, Harrybot, args)

                return
            };
        };
    });
}
