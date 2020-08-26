const Shotstack = require('shotstack-sdk');

module.exports = (tracks, soundtrack = null, background = null, ) => {
    let timeline = new Shotstack.Timeline;
    timeline
        .setBackground(background)
        .setSoundtrack(soundtrack)
        .setTracks(tracks);

    return timeline;
}
