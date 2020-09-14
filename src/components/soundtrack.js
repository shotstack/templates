const Shotstack = require('shotstack-sdk');

module.exports = (src, effect = null, volume = null) => {
    let soundtrack = new Shotstack.Soundtrack;
    soundtrack
        .setSrc(src)
        .setEffect(effect)
        .setVolume(volume);

    return soundtrack;
}