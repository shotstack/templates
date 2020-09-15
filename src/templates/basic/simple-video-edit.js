'use strict'

const core = require('../../core');

const generateTemplateJson = () => {
    const videoAsset1 = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/rain-on-roof.mp4');
    const videoAsset2 = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/cars-tunnel.mp4');
    const videoAsset3 = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/skateboarding.mp4');
    const videoAsset4 = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/city-timelapse.mp4');
    const videoAsset5 = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/skate-park.mp4');

    const clip1 = core.clip(videoAsset1, 0, 3);
    const clip2 = core.clip(videoAsset2, 3, 3);
    const clip3 = core.clip(videoAsset3, 6, 3);
    const clip4 = core.clip(videoAsset4, 9, 3);
    const clip5 = core.clip(videoAsset5, 12, 3);

    const track = core.track([clip1, clip2, clip3, clip4, clip5]);

    const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/ambisax.mp3');
    const timeline = core.timeline([track], soundtrack);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
