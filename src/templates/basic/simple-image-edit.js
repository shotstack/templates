'use strict'

const core = require('../../core');

const generateTemplateJson = () => {
    const imageAsset1 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/toy-van.jpg');
    const imageAsset2 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/puppies.jpg');
    const imageAsset3 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/skateboard.jpg');
    const imageAsset4 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/biscuits.jpg');
    const imageAsset5 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/wave-barrel.jpg');
    const imageAsset6 = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/desk-top.jpg');

    const clip1 = core.clip(imageAsset1, 0, 2);
    const clip2 = core.clip(imageAsset2, 2, 2);
    const clip3 = core.clip(imageAsset3, 4, 2);
    const clip4 = core.clip(imageAsset4, 6, 2);
    const clip5 = core.clip(imageAsset5, 8, 2);
    const clip6 = core.clip(imageAsset6, 10, 2);

    const track = core.track([clip1, clip2, clip3, clip4, clip5, clip6]);

    const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/lit.mp3');
    const timeline = core.timeline([track], soundtrack);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
