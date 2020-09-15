const edit = require('./edit');
const timeline = require('./timeline');
const output = require('./output');
const soundtrack = require('./soundtrack');
const font = require('./font');
const clip = require('./clip');
const track = require('./track');
const audio = require('./assets/audio');
const html = require('./assets/html');
const image = require('./assets/image');
const luma = require('./assets/luma');
const video = require('./assets/video');

module.exports = {
    edit,
    timeline,
    output,
    soundtrack,
    font,
    clip,
    track,
    assets: {
        audio,
        html,
        image,
        luma,
        video
    }
}
