'use strict'

const components = require('../../components');

const generateTemplateJson = () => {
    const imageAsset1 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/toy-van.jpg');
    const imageAsset2 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/puppies.jpg');
    const imageAsset3 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/skateboard.jpg');
    const imageAsset4 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/biscuits.jpg');
    const imageAsset5 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/wave-barrel.jpg');
    const imageAsset6 = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/desk-top.jpg');

    const clip1 = components.clip(imageAsset1, 0, 2);
    const clip2 = components.clip(imageAsset2, 2, 2);
    const clip3 = components.clip(imageAsset3, 4, 2);
    const clip4 = components.clip(imageAsset4, 6, 2);
    const clip5 = components.clip(imageAsset5, 8, 2);
    const clip6 = components.clip(imageAsset6, 10, 2);

    const track = components.track([clip1, clip2, clip3, clip4, clip5, clip6]);

    const soundtrack = components.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/lit.mp3');
    const timeline = components.timeline([track], soundtrack);
    const output = components.output('mp4', 'sd');

    const template = components.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
