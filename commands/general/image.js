var Scraper = require('images-scraper');
const request = require('request');
const { array } = require('yargs');
const { callback } = require('../moderation/ban');
const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'sends an image to channel',
    commands: ['image', 'images'],
    permissions: ['EMBED_LINKS'],
    permissionError: 'You need to be able to send images',
    expectedArgs: '<image name>',
    minArgs: 1,
    maxArgs: 1,
    async callback(client, message, args) {

        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name')

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
        
    }
}