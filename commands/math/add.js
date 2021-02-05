module.exports = {
    commands: ['add', 'addition'],
    expectedArgs: '<num1> <num2>',
    permissionError: 'you need admin',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, args, text) => {

    },
    requiredRoles: ['Math'],
    permissions: ['ADMINISTRATOR'],
}