const Shotstack = require('shotstack-sdk');

module.exports = (
    asset,
    start,
    length,
    fit = null,
    scale = null,
    position = null,
    xOffset = null,
    yOffset = null,
    transitionIn = null,
    transitionOut = null,
    effect = null,
    filter = null,
    opacity = null,
) => {
    let clip = new Shotstack.Clip;
    clip
        .setAsset(asset)
        .setStart(Number(start))
        .setLength(Number(length))
        .setFit(fit)
        .setScale(scale)
        .setPosition(position)
        .setOpacity(opacity)
        .setEffect(effect)
        .setFilter(filter);

        if (xOffset || yOffset) {
            clip.setOffset({
                x: xOffset,
                y: yOffset
            });
        }

        if (transitionIn || transitionOut) {
            clip.setTransition({
                in: transitionIn,
                out: transitionOut
            });
        }

    return clip;
}
