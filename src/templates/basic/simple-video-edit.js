'use strict'

const components = require('../../components');

const generateTemplateJson = () => {
    const videoAsset1 = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/rain-on-roof.mp4');
    const videoAsset2 = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/cars-tunnel.mp4');
    const videoAsset3 = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/skateboarding.mp4');
    const videoAsset4 = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/city-timelapse.mp4');
    const videoAsset5 = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/skate-park.mp4');

    const clip1 = components.clip(videoAsset1, 0, 3);
    const clip2 = components.clip(videoAsset2, 3, 3);
    const clip3 = components.clip(videoAsset3, 6, 3);
    const clip4 = components.clip(videoAsset4, 9, 3);
    const clip5 = components.clip(videoAsset5, 12, 3);

    const track = components.track([clip1, clip2, clip3, clip4, clip5]);

    const soundtrack = components.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/ambisax.mp3');
    const timeline = components.timeline([track], soundtrack);
    const output = components.output('mp4', 'sd');

    const template = components.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
