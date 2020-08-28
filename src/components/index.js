const edit = require('./edit');
const timeline = require('./timeline');
const output = require('./output');
const soundtrack = require('./soundtrack');
const font = require('./font');
const clip = require('./clip');
const track = require('./track');
const html = require('./assets/html');
const image = require('./assets/image');
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
        html,
        image,
        video
    }
}