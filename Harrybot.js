class Harrybot {
    color =[0x00c09a, 0x008369, 0x00d166, 0x008e44, 0x0099e1, 0x006798, 0xa652bb, 0x712f8f, 0xfd0061, 0xbc0057, 0xf8c300, 0xcc7900, 0xf93a2f, 0xa62019, 0x91a6a6, 0x969c9f, 0x597e8d, 0x4e6f7b];
    randomColor = color[Math.floor(Math.random() * color.length)];
    hexColor =['#00c09a', '#008369', '#00d166', '#008e44', '#0099e1', '#006798', '#a652bb', '#712f8f', '#fd0061', '#bc0057', '#f8c300', '#cc7900', '#f93a2f', '#a62019', '#91a6a6', '#969c9f', '#597e8d', '#4e6f7b'];
    randomHexColor = hexColor[Math.floor(Math.random() * hexColor.length)];
    args = message.content.slice(prefix.length).split(/ +/);
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}
module.exports = Harrybot;