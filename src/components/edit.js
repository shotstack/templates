const Shotstack = require('shotstack-sdk');

module.exports = (timeline, output) => {
    let edit = new Shotstack.Edit;
    edit
        .setTimeline(timeline)
        .setOutput(output);

    return edit;
}
