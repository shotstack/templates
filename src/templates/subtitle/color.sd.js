'use strict'

const core = require('../../core');
const { montserratBold } = require('../../consts/fonts');

const FOREGROUND_COLOR = '#7027D8';
const BACKGROUND_COLOR = '#8FD827';

const generateTemplateJson = () => {
    /**
     * Subtitles
     */
    const subtitleAsset1 = core.assets.html(
        `<p>We respectfully decline your pull request</p>`,
        `p { font-family: "${montserratBold.family}"; color: ${FOREGROUND_COLOR}; font-size: 28px; font-weight: bold; }`,
        750,
        60,
        BACKGROUND_COLOR
    );
    const subtitleClip1 = core.clip(subtitleAsset1, 0, 2.6, null, null, 'bottom', 0, 0.1);

    const subtitleAsset2 = core.assets.html(
        `<p>You have not adhered to the PSR standard</p>`,
        `p { font-family: "${montserratBold.family}"; color: ${FOREGROUND_COLOR}; font-size: 28px; }`,
        750,
        60,
        BACKGROUND_COLOR
    );
    const subtitleClip2 = core.clip(subtitleAsset2, 3, 2.6, null, null, 'bottom', 0.0, 0.1);

    const subtitleAsset3 = core.assets.html(
        `<p>Code coverage has dropped 0.2 percent</p>`,
        `p { font-family: "${montserratBold.family}"; color: ${FOREGROUND_COLOR}; font-size: 28px; }`,
        750,
        60,
        BACKGROUND_COLOR
    );
    const subtitleClip3 = core.clip(subtitleAsset3, 6, 2.6, null, null, 'bottom', 0.0, 0.1);

    const subtitleAsset4 = core.assets.html(
        `<p>AND you are using tabs instead of spaces</p>`,
        `p { font-family: "${montserratBold.family}"; color: ${FOREGROUND_COLOR}; font-size: 28px; }`,
        750,
        60,
        BACKGROUND_COLOR
    );
    const subtitleClip4 = core.clip(subtitleAsset4, 9, 3, null, null, 'bottom', 0.0, 0.1);
    
    const subtitleTrack = core.track([subtitleClip1, subtitleClip2, subtitleClip3, subtitleClip4]);

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
