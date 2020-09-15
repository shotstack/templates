const Shotstack = require('shotstack-sdk');

module.exports = (src) => {
    let asset = new Shotstack.ImageAsset;
    asset.setSrc(src);

    return asset;
}
