'use strict'

const components = require('../../components');
const { openSans, openSansBold, openSansExtraBold } = require('../../consts/fonts');

const CLIP_LENGTH = 10;

const generateTemplateJson = () => {
    /**
     * Background Image
     */
    const backgroundImage = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/financial-background.jpg');
    const backgroundClip = components.clip(backgroundImage, 0, CLIP_LENGTH, null, null, null, null, null, null, null, 'slideUp');
    const backgroundTrack = components.track([backgroundClip]);

    /**
     * Podcast Audio
     */
    const podcastAudio = components.assets.audio('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/audio/financial-podcast.mp3');
    const podcastClip = components.clip(podcastAudio, 0, CLIP_LENGTH);
    const podcastTrack = components.track([podcastClip]);

    /**
     * Lower Third and Title
     */
    const lowerThirdAsset = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/lower-thirds/static/banner-gold.png');
    const lowerThirdClip = components.clip(lowerThirdAsset, 0, CLIP_LENGTH, 'none', 0.7, 'topLeft', -0.16, -0.15, 'carouselRight');
    const lowerThirdTrack = components.track([lowerThirdClip]);

    const titleAsset = components.assets.html(
        `<p>The Finance Show</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 34px; text-align: left; }`,
        450,
        100
    );
    const titleClip = components.clip(titleAsset, 0.2, CLIP_LENGTH - 0.2, null, null, 'topLeft', 0.05, -0.118, 'slideRight');
    const titleTrack = components.track([titleClip]);

    /**
     * Main Heading
     */
    const headingAsset = components.assets.html(
        `<p>Podcast Heading</p>`,
        `p { font-family: "${openSansExtraBold.family}"; color: #ffffff; font-size: 38px; text-align: left; }`,
        450,
        100
    );
    const headingClip = components.clip(headingAsset, 0.1, CLIP_LENGTH - 0.1, null, null, 'left', 0.05, 0.1, 'slideLeft');
    const headingTrack = components.track([headingClip]);

    /**
     * Guest Name
     */
    const guestAsset = components.assets.html(
        `<p>Mr John Smith</p>`,
        `p { font-family: "${openSansBold.family}"; color: #d2bb8f; font-size: 28px; text-align: left; font-weight: ${openSansBold.style} }`,
        400,
        50
    );
    const guestClip = components.clip(guestAsset, 0.2, CLIP_LENGTH - 0.2, null, null, 'left', 0.05, 0, 'slideLeft');
    const guestTrack = components.track([guestClip]);

    /**
     * Guest Subtitle
     */
    const guestSummaryAsset = components.assets.html(
        `<p>Head of Global Derivatives, Eagle Corporate</p>`,
        `p { font-family: "${openSans.family}"; color: #ffffff; font-size: 22px; text-align: left; line-height: 65%; }`,
        500,
        40
    );
    const guestSummaryClip = components.clip(guestSummaryAsset, 0.3, CLIP_LENGTH - 0.3, null, null, 'left', 0.05, -0.05, 'slideLeft');
    const guestSummaryTrack = components.track([guestSummaryClip]);

    /**
     * Headshot and Mask
     */
    const headshotMask = components.assets.luma('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/luma-mattes/circle.jpg');
    const headshotMaskClip = components.clip(headshotMask, 0, CLIP_LENGTH, 'none', 0.30, 'right', -0.1, 0, 'fade');

    const headshotAsset = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/business-man.jpg');
    const headshotClip = components.clip(headshotAsset, 0, CLIP_LENGTH, 'none', 0.40, 'right', -0.1, 0, 'fade');
    const headshotTrack = components.track([
        headshotMaskClip,
        headshotClip
    ]);

    /**
     * Audio Waveform
     */
    const waveformAnimation = components.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/audio-waveforms/circle-speach.mov', 5);
    const waveformAnimationClip = components.clip(waveformAnimation, 0, CLIP_LENGTH, 'none', 0.41, 'right', -0.009, 0, 'fade');
    const waveformAnimationTrack = components.track([waveformAnimationClip]);

    /**
     * Logo
     */
    const logoAsset = components.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/logos/corporate-colour.png');
    const logoClip = components.clip(logoAsset, 0, CLIP_LENGTH, 'none', 0.25, 'bottomLeft', 0.05, 0.15, 'fade');
    const logoTrack = components.track([logoClip]);

    /**
     * Tracks
     */
    const tracks = [
        titleTrack,
        lowerThirdTrack,
        headingTrack,
        guestTrack,
        guestSummaryTrack,
        headshotTrack,
        waveformAnimationTrack,
        logoTrack,
        backgroundTrack,
        podcastTrack
    ];

    /**
     * Fonts
     */
    const fonts = [
        components.font(openSans.src),
        components.font(openSansBold.src),
        components.font(openSansExtraBold.src)
    ];

    /**
     * Timeline, Output and Template
     */
    const timeline = components.timeline(tracks, null, null, fonts);
    const output = components.output('mp4', 'sd');
    const template = components.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
