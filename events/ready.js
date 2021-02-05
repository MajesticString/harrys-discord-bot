function ready() {
    console.log('harrybot is online');
    client.user.setActivity("--help", {
        type: "PLAYING",
    });

}
module.exports = ready;