'use strict'

const core = require('../../core');
const { manropeExtraBold, manropeLight } = require('../../consts/fonts');
const { BED, BATH, CAR } = require('../../consts/icons/slimline');
const Icon = require('../../components/Icon');
const KenBurns = require('../../components/KenBurns');
const Title = require('../../components/Title');
const timelineHelper = require('../../helpers/timeline');

const theme = {
  color: {
    primary: '#f0c20c',
    secondary: '#ffffff'
  },
  font: {
    primary: manropeExtraBold,
    secondary: manropeLight
  },
  overlay: {
    style: 'arrow-sharp',
    color: 'black'
  },
  soundtrack: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/music/unminus/ambisax.mp3'
}

const content = {
  address: '192 STOREY STREET',
  suburb: 'MAROUBRA, NSW 2035',
  sale: 'AUCTION 22 OCTOBER',
  type: 'HOUSE',
  beds: '4',
  baths: '2',
  cars: '1',
  image1: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate1.jpg',
  image2: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate2.jpg',
  image3: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate3.jpg',
  image4: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate4.jpg',
  image5: 'https://shotstack-assets.s3.ap-southeast-2.amazonaws.com/images/realestate5.jpg',
  agent: 'JEREMY SIMPSON',
  logo: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/logos/real-estate-white.png',
  headshot: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/real-estate-agent-male.jpg',
  mobile: '0424 998 776',
  email: 'jeremy@blockrealestate.co'
}

// TODO: Adapt to different resolutions: 1080, HD, SD

const generateTemplateJson = () => {
  /**
   * Main Heading
   */
  const headingAsset = new Title(content.address, 360, 200, 'bottom', {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: '40px',
    align: 'left',
    lineHeight: '70',
  });
  const heading = core.clip(headingAsset.asset, 1.2, 4.2, null, null, 'left', 0.05, 0.3, 'slideRight', 'slideLeft');

  /**
   * Sub Heading
   */
   const subHeadingAsset = new Title(content.suburb, 360, 100, 'top', {
    font: theme.font.secondary.family,
    color: theme.color.secondary,
    size: '22px',
    align: 'left',
    lineHeight: '70',
  });
  const subHeading = core.clip(subHeadingAsset.asset, 1.3, 3.9, null, null, 'left', 0.05, 0.04, 'slideRight', 'slideLeft');

  /**
   * Sale Type Heading (i.e. Auction)
   */
   const saleHeadingAsset = new Title(content.sale, 360, 100, 'top', {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: '22px',
    align: 'left',
    lineHeight: '70',
  });
  const saleHeading = core.clip(saleHeadingAsset.asset, 1.4, 4, null, null, 'left', 0.05, -0.24, 'slideRight', 'slideLeft');

  /**
   * Property Type (i.e. House, Apartment)
   */
  const typeHeadingAsset = new Title(content.type, 150, 24, 'top', {
    font: theme.font.secondary.family,
    color: theme.color.secondary,
    size: '17px',
    align: 'left',
    lineHeight: '70',
  });
  const typeHeading = core.clip(typeHeadingAsset.asset, 1.4, 4, null, null, 'left', 0.05, -0.08, 'fade', 'fade');

  const contentTrack = core.track([heading, subHeading, saleHeading, typeHeading]);

  /**
   * Icons
   */
  const bedIconAsset = new Icon(BED);
  const bathIconAsset = new Icon(BATH);
  const carIconAsset = new Icon(CAR);
  const bedIcon = core.clip(bedIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.055, -0.025, 'fade', 'fade');
  const bathIcon = core.clip(bathIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.13, -0.025, 'fade', 'fade');
  const carIcon = core.clip(carIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.205, -0.025, 'fade', 'fade');

  const bedIconTextAsset = new Title('4', 24, 24, 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: '18px',
    align: 'center',
  });
  const bedIconText = core.clip(bedIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.08, -0.025, 'fade', 'fade');

  const bathIconTextAsset = new Title('2', 24, 24, 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: '18px',
    align: 'center',
  });
  const bathIconText = core.clip(bathIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.155, -0.025, 'fade', 'fade');

  const carIconTextAsset = new Title('1', 24, 24, 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: '18px',
    align: 'center',
  });
  const carIconText = core.clip(carIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.23, -0.025, 'fade', 'fade');

  const iconsTrack = core.track([bedIcon, bathIcon, carIcon, bedIconText, bathIconText, carIconText]);

  /**
   * Kenburns image slideshow
   */
  const kenburns = new KenBurns(6, 'slow');
  kenburns.addAsset(core.assets.image(content.image1), 'in', 'fade');
  kenburns.addAsset(core.assets.image(content.image2), 'left');
  kenburns.addAsset(core.assets.image(content.image3), 'right');
  kenburns.addAsset(core.assets.image(content.image4), 'up');
  kenburns.addAsset(core.assets.image(content.image5), 'left');
  kenburns.addAsset(core.assets.image(content.image1), 'in');
  kenburns.startAt = 0;

  /**
   * Overlay transitions
   */
  const TRANSITION_POINT = 1.44;
  const TRANSITION_LENGTH = 3;
  
  const introOverlayInAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/content-left-in.mov`);
  const introOverlayOutAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/content-left-out.mov`);
  const overlayTransitionLeftAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/transition-left.mov`);
  const overlayTransitionRightAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/transition-right.mov`);
  const overlayTransitionUpAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/transition-up.mov`);
  const outroOverlayAsset = core.assets.video(`https://templates.shotstack.io/basic/asset/video/overlay/${theme.overlay.style}/${theme.overlay.color}/outro-in.mov`);

  const introOverlayInClip = core.clip(introOverlayInAsset, 0, timelineHelper.getOverlapStartTime(0, 6, 1.52));
  const introOverlayOutClip = core.clip(introOverlayOutAsset, timelineHelper.getOverlapStartTime(0, 6, 1.48), 2);
  const overlayTransitionClip1 = core.clip(overlayTransitionRightAsset, timelineHelper.getOverlapStartTime(6, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionClip2 = core.clip(overlayTransitionUpAsset, timelineHelper.getOverlapStartTime(12, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionClip3 = core.clip(overlayTransitionLeftAsset, timelineHelper.getOverlapStartTime(18, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const outroOverlayClip = core.clip(outroOverlayAsset, timelineHelper.getOverlapStartTime(24, 7, 2), 7);

  const overlayTransitionTrack = core.track([
    introOverlayInClip,
    introOverlayOutClip,
    overlayTransitionClip1,
    overlayTransitionClip2,
    overlayTransitionClip3,
    outroOverlayClip,
  ]);

  /**
   * Outro Headshot and Mask
   */
   const headshotMask = core.assets.luma('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/luma-mattes/circle.jpg');
   const headshotMaskClip = core.clip(headshotMask, 30, 6);

   const headshotAsset = core.assets.image(content.headshot);
   const headshotClip = core.clip(headshotAsset, 30, 6, 'none', 0.4, null, 0, 0.22, 'fade');
   const headshotTrack = core.track([
       headshotMaskClip,
       headshotClip
   ]);

   /**
   * Outro Agent Name
   */
  const agentNameAsset = new Title(content.agent, 400, 100, null, {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: '26px',
    align: 'center',
  });
  const agentNameClip = core.clip(agentNameAsset.asset, 30, 6, null, null, null, 0, 0.045, 'fade');

  /**
   * Outro Logo
   */
  const logoAsset = core.assets.image(content.logo);
  const logoClip = core.clip(logoAsset, 30, 6, 'none', 0.26, null, 0, -0.08, 'fade');

  /**
   * Outro Agent Contacts
   */
  const agentContactsAsset = new Title(`${content.mobile}<br>${content.email}`, 400, 100, null, {
    font: theme.font.secondary.family,
    color: '#e6e6e6',
    size: '18px',
    align: 'center',
  });
  const agentContactsClip = core.clip(agentContactsAsset.asset, 30, 6, null, null, null, 0, -0.24, 'fade');

  const outroTrack = core.track([
    agentNameClip,
    logoClip,
    agentContactsClip
  ]);

  /**
   * Final edit
   */
  const tracks = [
    contentTrack,
    iconsTrack,
    headshotTrack,
    outroTrack,
    overlayTransitionTrack,
    kenburns.track
  ];

  const fonts = [
    core.font(theme.font.primary.src),
    core.font(theme.font.secondary.src)
  ]

  const soundtrack = core.soundtrack(theme.soundtrack, 'fadeOut');
  const timeline = core.timeline(tracks, soundtrack, null, fonts);
  const output = core.output('mp4', 'sd');

  const template = core.edit(timeline, output);

  return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
