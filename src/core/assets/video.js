const Shotstack = require('shotstack-sdk');

module.exports = (src, trim = null, volume = null) => {
    let asset = new Shotstack.VideoAsset;
    asset
        .setSrc(src)
        .setTrim(trim)
        .setVolume(volume);

    return asset;
}
