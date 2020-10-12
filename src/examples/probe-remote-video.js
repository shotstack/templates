'use strict'

const Probe = require('../utilities/Probe');
const VIDEO_URL = 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/cars-tunnel.mp4';

const probe = new Probe();
probe.inspect(VIDEO_URL).then((video) => {
    console.log(`Video is ${video.getDuration()} seconds long with resolution ${video.get('ImageSize')}.`);
    probe.close();
}).catch((error) => {
    console.error('An error occurred: ', error);
    probe.close();
});
