'use strict'

const Probe = require('../utilities/Probe');
const IMAGE_FILE = __dirname + '/assets/surfer.jpg';

const probe = new Probe();
probe.inspect(IMAGE_FILE).then((image) => {
    console.log(`Image is ${image.getWidth()}px wide by ${image.getHeight()}px high.`);
    probe.close();
}).catch((error) => {
    console.error('An error occurred: ', error);
    probe.close();
});
