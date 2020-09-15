const Shotstack = require('shotstack-sdk');

module.exports = (clips) => {
    let track = new Shotstack.Track;
    track
        .setClips(clips);

    return track;
}
