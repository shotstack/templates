const Shotstack = require('shotstack-sdk');

module.exports = (src, trim = null, volume = null) => {
    const asset = new Shotstack.AudioAsset;
    asset
        .setSrc(src)
        .setTrim(trim)
        .setVolume(volume);

    return asset;
}
