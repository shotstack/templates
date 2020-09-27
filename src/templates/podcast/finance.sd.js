'use strict'

const core = require('../../core');
const Title = require('../../components/Title');
const Panel = require('../../components/Panel');
const { openSans, openSansBold, openSansExtraBold } = require('../../consts/fonts');

const CLIP_LENGTH = 10;

const generateTemplateJson = () => {
    /**
     * Background Image
     */
    const backgroundImage = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/financial-background.jpg');
    const backgroundClip = core.clip(backgroundImage, 0, CLIP_LENGTH, null, null, null, null, null, null, null, 'slideUp');
    const backgroundTrack = core.track([backgroundClip]);

    /**
     * Podcast Audio
     */
    const podcastAudio = core.assets.audio('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/audio/financial-podcast.mp3');
    const podcastClip = core.clip(podcastAudio, 0, CLIP_LENGTH);
    const podcastTrack = core.track([podcastClip]);

    /**
     * Lower Third and Title
     */
    const panel = new Panel(420, 64, '#d2bb8f');

    const lowerThirdAsset = panel.asset;
    const lowerThirdClip = core.clip(lowerThirdAsset, 0, CLIP_LENGTH, null, null, 'topLeft', 0, -0.15, 'carouselRight');
    const lowerThirdTrack = core.track([lowerThirdClip]);

    const title = new Title('The Finance Show', 450, 100, {
        font: openSans.family,
        color: '#ffffff',
        size: '34px',
        align: 'left'
    });

    const titleClip = core.clip(title.asset, 0.2, CLIP_LENGTH - 0.2, null, null, 'topLeft', 0.05, -0.118, 'slideRight');
    const titleTrack = core.track([titleClip]);

    /**
     * Main Heading
     */
    const heading = new Title('Podcast Heading', 450, 100, {
        font: openSansExtraBold.family,
        color: '#ffffff',
        size: '38px',
        align: 'left'
    });

    const headingClip = core.clip(heading.asset, 0.1, CLIP_LENGTH - 0.1, null, null, 'left', 0.05, 0.1, 'slideLeft');
    const headingTrack = core.track([headingClip]);

    /**
     * Guest Name
     */
    const guest = new Title('Mr John Smith', 400, 50, {
        font: openSansBold.family,
        color: '#d2bb8f',
        size: '28px',
        align: 'left',
        bold: true
    });

    const guestClip = core.clip(guest.asset, 0.2, CLIP_LENGTH - 0.2, null, null, 'left', 0.05, 0, 'slideLeft');
    const guestTrack = core.track([guestClip]);

    /**
     * Guest Subtitle
     */
    const summary = new Title('Head of Global Derivatives, Eagle Corporate', 500, 40, {
        font: openSans.family,
        color: '#ffffff',
        size: '22px',
        align: 'left',
        lineHeight: '65%'
    });

    const guestSummaryClip = core.clip(summary.asset, 0.3, CLIP_LENGTH - 0.3, null, null, 'left', 0.05, -0.05, 'slideLeft');
    const guestSummaryTrack = core.track([guestSummaryClip]);

    /**
     * Headshot and Mask
     */
    const headshotMask = core.assets.luma('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/luma-mattes/circle.jpg');
    const headshotMaskClip = core.clip(headshotMask, 0, CLIP_LENGTH, 'none', 0.30, 'right', -0.1, 0, 'fade');

    const headshotAsset = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/business-man.jpg');
    const headshotClip = core.clip(headshotAsset, 0, CLIP_LENGTH, 'none', 0.40, 'right', -0.1, 0, 'fade');
    const headshotTrack = core.track([
        headshotMaskClip,
        headshotClip
    ]);

    /**
     * Audio Waveform
     */
    const waveformAnimation = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/audio-waveforms/circle-speach.mov', 5);
    const waveformAnimationClip = core.clip(waveformAnimation, 0, CLIP_LENGTH, 'none', 0.41, 'right', -0.009, 0, 'fade');
    const waveformAnimationTrack = core.track([waveformAnimationClip]);

    /**
     * Logo
     */
    const logoAsset = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/logos/corporate-colour.png');
    const logoClip = core.clip(logoAsset, 0, CLIP_LENGTH, 'none', 0.25, 'bottomLeft', 0.05, 0.15, 'fade');
    const logoTrack = core.track([logoClip]);

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
        core.font(openSans.src),
        core.font(openSansBold.src),
        core.font(openSansExtraBold.src)
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
