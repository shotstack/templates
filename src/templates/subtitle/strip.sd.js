'use strict'

const core = require('../../core');
const { openSans } = require('../../consts/fonts');

const generateTemplateJson = () => {
    /**
     * Subtitles
     */
    const subtitleAsset1 = core.assets.html(
        `<p>You can clearly see that PHP is the most popular programming language.</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`,
        1000,
        80
    );
    const subtitleClip1 = core.clip(subtitleAsset1, 0, 3, null, null, 'bottom');

    const subtitleAsset2 = core.assets.html(
        `<p>If you examine this chart I think you'll find it's NodeJS.</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`,
        1000,
        80
    );
    const subtitleClip2 = core.clip(subtitleAsset2, 3.5, 4, null, null, 'bottom');

    const subtitleAsset3 = core.assets.html(
        `<p>Well, common sense would indicate Java is the most popular.</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`,
        1000,
        80
    );
    const subtitleClip3 = core.clip(subtitleAsset3, 8, 3, null, null, 'bottom');

    const subtitleAsset4 = core.assets.html(
        `<p>Java? Do you mean JavaScript?</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`,
        1000,
        80
    );
    const subtitleClip4 = core.clip(subtitleAsset4, 11.5, 3, null, null, 'bottom');

    const subtitleAsset5 = core.assets.html(
        `<p>F*#k You!</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 24px; }`,
        1000,
        80
    );
    const subtitleClip5 = core.clip(subtitleAsset5, 14.5, 2, null, null, 'bottom');
    
    const subtitleTrack = core.track([subtitleClip1, subtitleClip2, subtitleClip3, subtitleClip4, subtitleClip5]);

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
