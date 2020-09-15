const Shotstack = require('shotstack-sdk');

module.exports = (src) => {
    let font = new Shotstack.Font;
    font.setSrc(src);

    return font;
}