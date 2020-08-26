const edit = require('./edit');
const timeline = require('./timeline');
const output = require('./output');
const soundtrack = require('./soundtrack');
const clip = require('./clip');
const track = require('./track');
const html = require('./assets/html');

module.exports = {
    edit,
    timeline,
    output,
    soundtrack,
    clip,
    track,
    assets: {
        html
    }
}