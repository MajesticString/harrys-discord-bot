module.exports = (client) => {
    console.log('harrybot is online');
    client.user.setActivity("--help", {
        type: "PLAYING",
    });
}