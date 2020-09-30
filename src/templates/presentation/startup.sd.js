'use strict'

const core = require('../../core');
const Title = require('../../components/Title');
const Panel = require('../../components/Panel');
const { montserrat, montserratBold, montserratBlack } = require('../../consts/fonts');

const SLIDE_LENGTH = 5
const NUM_SLIDES = 5;
const HIGHLITE_COLOR = '#1c8be3';
const FG_COLOR = '#ffffff';
const BG_COLOR = '#1b1b1b';

const generateTemplateJson = () => {
    /**
     * Logo
     */
    const logoAsset = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/logos/startup-color.png');
    const logoClip = core.clip(logoAsset, 0.25, (NUM_SLIDES * SLIDE_LENGTH) - 0.25, 'none', 0.65, 'bottomLeft', 0.05, 0.10, 'slideRight');
    const logoTrack = core.track([logoClip]);

    /**
     * Slide 1
     */
    /* Background */
    const slide1BgImage = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/dog1.jpg');
    const slide1BgImageClip = core.clip(slide1BgImage, 0, SLIDE_LENGTH, null, null, null, null, null, null, 'carouselLeft', 'zoomOut');
    const slide1BgTrack = core.track([slide1BgImageClip]);

    /** Title */
    const slide1Title = new Title('Pet Food<br>Drone Delivery', 500, 200, null, {
        font: montserratBlack.family,
        color: BG_COLOR,
        size: '48px',
        align: 'left'
    });
    const slide1TitleClip = core.clip(slide1Title.asset, 0.5, SLIDE_LENGTH -1, null, null, 'topLeft', 0.05, -0.06, 'slideRight', 'slideRight');
    const slide1TitleTrack = core.track([slide1TitleClip]);

    /** Sub Heading */
    const slide1SubHeading = new Title(`Don't fret if you forget to feed your pet!`, 400, 300, null, {
        font: montserratBold.family,
        color: HIGHLITE_COLOR,
        size: '26px',
        align: 'left',
        bold: true
    });
    const slide1SubHeadingClip = core.clip(slide1SubHeading.asset, 0.5, SLIDE_LENGTH - 1, null, null, 'topLeft', 0.05, -0.16, 'slideLeft', 'slideLeft');
    const slide1SubHeadingTrack = core.track([slide1SubHeadingClip]);

    /**
     * Slide 2
     */
    /** Panel Background */
    const highlitePanelBg = new Panel(1024, 576, HIGHLITE_COLOR);
    const slide2PanelBgAsset = highlitePanelBg.asset;
    const slide2PanelBgClip = core.clip(slide2PanelBgAsset, (SLIDE_LENGTH * 1) - 1, SLIDE_LENGTH + 1, null, null, null);
    const slide2PanelBgTrack = core.track([slide2PanelBgClip]);

    /* Image */
    const slide2Image = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/founder1.jpg');
    const slide2ImageClip = core.clip(slide2Image, (SLIDE_LENGTH * 1) - 0.25, SLIDE_LENGTH + 0.25, 'contain', null, null, -0.31, null, 'carouselRight', null, 'zoomIn');
    const slide2ImageTrack = core.track([slide2ImageClip]);

    /** Panel Overlay */
    const highlitePanelFg = new Panel(650, 576, HIGHLITE_COLOR);
    const slide2PanelFgAsset = highlitePanelFg.asset;
    const slide2PanelFgClip = core.clip(slide2PanelFgAsset, SLIDE_LENGTH * 1, SLIDE_LENGTH, null, null, 'right');
    const slide2PanelFgTrack = core.track([slide2PanelFgClip]);

    /** Copy */
    const slide2Copy = new Title(
        `Founded in 2012 by ex-google engineer, Hans Ruffus. DoggoSnax has gone on to dominate the pet food drone delivery industry.`,
        500,
        500,
        null,
        {
            font: montserratBold.family,
            color: FG_COLOR,
            size: '30px',
            align: 'left',
            bold: true,
            lineHeight: '50px'
        }
    );
    const slide2CopyClip = core.clip(slide2Copy.asset, (SLIDE_LENGTH * 1) + 0.5, SLIDE_LENGTH - 0.5, null, null, 'right', -0.06, 0, 'slideLeft');
    const slide2CopyTrack = core.track([slide2CopyClip]);

    /**
     * Slide 3
     */
    /* Background */
    const slide3BgImage = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/drone1.jpg');
    const slide3BgImageClip = core.clip(slide3BgImage, SLIDE_LENGTH * 2, SLIDE_LENGTH, null, null, null, null, null, 'zoom', 'carouselRight', 'zoomOut', null, 0.6);
    const slide3BgTrack = core.track([slide3BgImageClip]);

    /** Copy */
    const slide3Copy = new Title(
        `With 5 million users world wide the company has raised $30 million, valuing the business at $200 million.`,
        500,
        450,
        'top',
        {
            font: montserratBold.family,
            color: FG_COLOR,
            size: '30px',
            align: 'left',
            bold: true,
            lineHeight: '50px'
        }
    );
    const slide3CopyClip = core.clip(slide3Copy.asset, (SLIDE_LENGTH * 2) + 0.5, SLIDE_LENGTH - 1, null, null, 'left', 0.06, 0, 'slideRight', 'slideLeft');
    const slide3CopyTrack = core.track([slide3CopyClip]);

    /**
     * Slide 4
     */
    /* Background */
    const slide4BgImage = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/dog2.jpg');
    const slide4BgImageClip = core.clip(slide4BgImage, SLIDE_LENGTH * 3, SLIDE_LENGTH, 'contain', null, null, 0.2, null, 'carouselLeft', 'carouselRight', 'zoomIn');
    const slide4BgTrack = core.track([slide4BgImageClip]);

    /** Panel Overlay */
    const fgPanel = new Panel(600, 576, FG_COLOR);
    const slide4PanelAsset = fgPanel.asset;
    const slide4PanelClip = core.clip(slide4PanelAsset, (SLIDE_LENGTH * 3) - 0.25, SLIDE_LENGTH + 0.25, null, null, 'left');
    const slide4PanelTrack = core.track([slide4PanelClip]);

    /** Copy */
    const slide4Copy = new Title(
        `Is this the next Unicorn? Or is it just a dog in disguise?`,
        450,
        450,
        null,
        {
            font: montserratBold.family,
            color: HIGHLITE_COLOR,
            size: '30px',
            align: 'left',
            bold: true,
            lineHeight: '50px'
        }
    );
    const slide4CopyClip = core.clip(slide4Copy.asset, (SLIDE_LENGTH * 3) + 0.5, SLIDE_LENGTH - 1, null, null, 'left', 0.06, 0.2, 'slideRight', 'slideLeft');
    const slide4CopyTrack = core.track([slide4CopyClip]);

    /**
     * Slide 5
     */
    /* Background */
    const slide5BgImage = core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/dog3.jpg');
    const slide5BgImageClip = core.clip(slide5BgImage, SLIDE_LENGTH * 4, SLIDE_LENGTH, null, null, null, null, null, 'zoom', null, 'zoomOut');
    const slide5BgTrack = core.track([slide5BgImageClip]);

    /** Copy */
    const slide5Copy = new Title(`Find out more at`, 500, 100, null, {
        font: montserratBold.family,
        color: HIGHLITE_COLOR,
        size: '30px',
        align: 'center',
        bold: true,
    });
    const slide5CopyClip = core.clip(slide5Copy.asset, (SLIDE_LENGTH * 4) + 0.5, SLIDE_LENGTH - 0.5, null, null, 'top', 0, -0.1, 'slideUp');
    const slide5CopyTrack = core.track([slide5CopyClip]);

    /** Url */
    const slide5Url = new Title(`doggosnax.com`, 600, 200, null, {
        font: montserratBlack.family,
        color: BG_COLOR,
        size: '60px',
        align: 'center',
    });
    const slide5UrlClip = core.clip(slide5Url.asset, (SLIDE_LENGTH * 4) + 0.5, SLIDE_LENGTH - 0.5, null, null, 'top', 0, -0.12, 'slideDown');
    const slide5UrlTrack = core.track([slide5UrlClip]);

    /**
     * Tracks
     */
    const tracks = [
        logoTrack,
        slide1TitleTrack,
        slide1SubHeadingTrack,
        slide1BgTrack,
        slide2CopyTrack,
        slide2PanelFgTrack,
        slide2ImageTrack,
        slide2PanelBgTrack,
        slide3CopyTrack,
        slide3BgTrack,
        slide4CopyTrack,
        slide4PanelTrack,
        slide4BgTrack,
        slide5CopyTrack,
        slide5UrlTrack,
        slide5BgTrack,
    ];

    /**
     * Fonts
     */
    const fonts = [
        core.font(montserrat.src),
        core.font(montserratBold.src),
        core.font(montserratBlack.src)
    ];

    const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/berlin.mp3', 'fadeOut', 0.5);
    const timeline = core.timeline(tracks, soundtrack, FG_COLOR, fonts);
    const output = core.output('mp4', 'sd');

    const template = core.edit(timeline, output);

    return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
