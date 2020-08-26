const Shotstack = require('shotstack-sdk');

module.exports = (src, effect = null) => {
    let soundtrack = new Shotstack.Soundtrack;
    soundtrack
        .setSrc(src)
        .setEffect(effect);

    return soundtrack;
}