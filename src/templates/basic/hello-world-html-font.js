'use strict'

const core = require('../../core');
const { kanitExtraBold } = require('../../consts/fonts');

const generateTemplateJson = () => {
    const html = '<h1>HELLO WORLD</h1>';
    const css = `h1 { color: "#25d3d0"; font-size: 36px; font-family: "${kanitExtraBold.family}"; }`

    const headingAsset = core.assets.html(html, css, 400, 300);
    const heading = core.clip(headingAsset, 0, 10);
    const track1 = core.track([heading]);

    const fontSrc = core.font(kanitExtraBold.src);
    const soundtrack = core.soundtrack('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/private/epic.mp3');
    const timeline = core.timeline([track1], soundtrack, null, [fontSrc]);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
