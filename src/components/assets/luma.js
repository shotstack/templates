const Shotstack = require('shotstack-sdk');

module.exports = (src, trim = null) => {
    let asset = new Shotstack.LumaAsset;
    asset
        .setSrc(src)
        .setTrim(trim);

    return asset;
}
