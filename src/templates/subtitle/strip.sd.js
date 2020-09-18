'use strict'

const core = require('../../core');
const Subtitles = require('../../components/Subtitles');
const { openSans } = require('../../consts/fonts');

const generateTemplateJson = () => {
    /**
     * Subtitles
     */
    const width = 1000;
    const height = 80;
    const css = `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`;
    const position = 'bottom';

    let subtitles = new Subtitles(width, height, css, position);

    subtitles.addSubtitle(`<p>You can clearly see that PHP is the most popular programming language.</p>`, 0, 3);
    subtitles.addSubtitle(`<p>If you examine this chart I think you'll find it's NodeJS.</p>`, 3.5, 4);
    subtitles.addSubtitle(`<p>Well, common sense would indicate Java is the most popular.</p>`, 8, 3);
    subtitles.addSubtitle(`<p>Java? Do you mean JavaScript?</p>`, 11.5, 3);
    subtitles.addSubtitle(`<p>F*#k You!</p>`, 14.5, 2);
    
    const subtitleTrack = subtitles.getTrack();

    /**
     * Strip
     */
    const stripAsset = core.assets.html(
        `<p>&nbsp;</p>`,
        null,
        1024,
        80,
        '#000000'
    );
    const stripClip = core.clip(stripAsset, 0, 17, null, null, 'bottom');
    const stripTrack = core.track([stripClip]);

    /**
     * Video
     */
    const videoAsset = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/footage/discussing-charts.mp4');
    const videoAssetClip = core.clip(videoAsset, 0, 17);
    const videoAssetTrack = core.track([videoAssetClip]);

    /**
     * Tracks
     */
    const tracks = [
        subtitleTrack,
        stripTrack,
        videoAssetTrack
    ];

    /**
     * Fonts
     */
    const fonts = [
        core.font(openSans.src)
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
