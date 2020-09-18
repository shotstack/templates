'use strict'

const core = require('../../core');
const Carousel = require('../../components/Carousel');

const generateTemplateJson = () => {
    const images = [
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy1.jpg',
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy2.jpg',
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy3.jpg',
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy4.jpg',
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy5.jpg',
        'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy6.jpg'
    ]

    const carousel = new Carousel(2, 'up');

    images.forEach((image) => {
        carousel.addAsset(core.assets.image(image));
    });

    const track = carousel.track;

    const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/happy.mp3');
    const timeline = core.timeline([track], soundtrack);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
