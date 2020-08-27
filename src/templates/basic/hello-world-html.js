'use strict'

const components = require('../../components');

const generateTemplateJson = () => {
    const headingAsset = components.assets.html('<h1>Hello World</h1>', 'h1 { color: "#ffffff"; font-size: 24px; }', 400, 300,);
    const heading = components.clip(headingAsset, 0, 10);
    const track1 = components.track([heading]);

    const soundtrack = components.soundtrack('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/private/epic.mp3');
    const timeline = components.timeline([track1], soundtrack);
    const output = components.output('mp4', 'sd');

    const template = components.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
