const Shotstack = require('shotstack-sdk');

module.exports = (tracks, soundtrack = null, background = null, fonts = null) => {
    let timeline = new Shotstack.Timeline;
    timeline
        .setFonts(fonts)
        .setBackground(background)
        .setSoundtrack(soundtrack)
        .setTracks(tracks);

    return timeline;
}
