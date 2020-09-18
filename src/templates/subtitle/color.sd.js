'use strict'

const core = require('../../core');
const Subtitles = require('../../components/Subtitles');
const { montserratBold } = require('../../consts/fonts');

const generateTemplateJson = () => {
    /**
     * Subtitles
     */
    const width = 750;
    const height = 60;
    const css = `p { font-family: "${montserratBold.family}"; color: #7027D8; font-size: 28px; font-weight: bold; }`;
    const position = 'bottom';
    const x = 0;
    const y = 0.1;
    const background = '#8FD827';

    let subtitles = new Subtitles(width, height, css, position, x, y, background);

    subtitles.addSubtitle(`<p>We respectfully decline your pull request</p>`, 0, 2.6);
    subtitles.addSubtitle(`<p>You have not adhered to the PSR standard</p>`, 3, 2.6);
    subtitles.addSubtitle(`<p>Code coverage has dropped 0.2 percent</p>`, 6, 2.6);
    subtitles.addSubtitle(`<p>AND you are using tabs instead of spaces</p>`, 9, 3);
    
    const subtitleTrack = subtitles.track;

    /**
     * Video
     */
    const videoAsset = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/confrontation-meeting.mp4');
    const videoAssetClip = core.clip(videoAsset, 0, 12);
    const videoAssetTrack = core.track([videoAssetClip]);

    /**
     * Tracks
     */
    const tracks = [
        subtitleTrack,
        videoAssetTrack
    ];

    /**
     * Fonts
     */
    const fonts = [
        core.font(montserratBold.src)
    ];

    /**
     * Timeline, Output and Template
     */
    const timeline = core.timeline(tracks, null, null, fonts);
    const output = core.output('mp4', 'sd');
    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
