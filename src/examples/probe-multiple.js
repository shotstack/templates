'use strict'

const Probe = require('../utilities/Probe');
const IMAGE_FILE = __dirname + '/assets/surfer.jpg';
const VIDEO_URL = 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/cars-tunnel.mp4';

const probe = new Probe();
Promise.all([
    probe.inspect(IMAGE_FILE),
    probe.inspect(VIDEO_URL)
]).then(function (assets) {
    const [image, video] = assets
    console.log(`Video is ${video.getDuration()} seconds long with resolution ${video.get('ImageSize')}.`);
    console.log(`Image is ${image.getWidth()}px wide by ${image.getHeight()}px high.`);
    probe.close();
}).catch((error) => {
    console.error('An error occurred: ', error);
    probe.close();
});
