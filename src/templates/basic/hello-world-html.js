'use strict'

const core = require('../../core');

const generateTemplateJson = () => {
    const headingAsset = core.assets.html('<h1>Hello World</h1>', 'h1 { color: "#ffffff"; font-size: 24px; }', 400, 300,);
    const heading = core.clip(headingAsset, 0, 10);
    const track1 = core.track([heading]);

    const soundtrack = core.soundtrack('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/private/epic.mp3');
    const timeline = core.timeline([track1], soundtrack);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
