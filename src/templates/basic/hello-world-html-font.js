'use strict'

const components = require('../../components');
const { kanitExtraBold } = require('../../consts/fonts');

const generateTemplateJson = () => {
    const html = '<h1>HELLO WORLD</h1>';
    const css = `h1 { color: "#25d3d0"; font-size: 36px; font-family: "${kanitExtraBold.family}"; }`

    const headingAsset = components.assets.html(html, css, 400, 300);
    const heading = components.clip(headingAsset, 0, 10);
    const track1 = components.track([heading]);

    const fontSrc = components.font(kanitExtraBold.src);
    const soundtrack = components.soundtrack('https://s3-ap-southeast-2.amazonaws.com/shotstack-assets/private/epic.mp3');
    const timeline = components.timeline([track1], soundtrack, null, [fontSrc]);
    const output = components.output('mp4', 'sd');

    const template = components.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
