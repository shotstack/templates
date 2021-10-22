'use strict'

const core = require('../../core');
const { BED, BATH, CAR } = require('../../consts/icons/slimline');
const Icon = require('../../components/Icon');
const KenBurns = require('../../components/KenBurns');
const Title = require('../../components/Title');
const timelineHelper = require('../../helpers/timeline');
const scaleHelper = require('../../helpers/scale');

const RESOLUTION = '1080';
const ICONS_SIZES = {
  'sd': '26px',
  'hd': '32px',
  '1080': '42px',
}

const theme = {
  color: {
    primary: '{{PRIMARY_COLOR}}',
    secondary: '{{SECONDARY_COLOR}}'
  },
  font: {
    primary: {
      family: '{{PRIMARY_FONT}}',
      src: '{{PRIMARY_FONT_SRC}}'
    },
    secondary: {
      family: '{{SECONDARY_FONT}}',
      src: '{{SECONDARY_FONT_SRC}}'
    }
  },
  overlay: {
    style: '{{OVERLAY_STYLE}}',
    color: '{{OVERLAY_COLOR}}'
  },
  soundtrack: '{{SOUNDTRACK}}'
}

const content = {
  address: '{{ADDRESS_1}}',
  suburb: '{{ADDRESS_2}}',
  sale: '{{SALE_TYPE}}',
  type: '{{PROPERTY_TYPE}}',
  beds: '{{BEDS}}',
  baths: '{{BATHS}}',
  cars: '{{CARS}}',
  image1: '{{IMAGE_1}}',
  image2: '{{IMAGE_2}}',
  image3: '{{IMAGE_3}}',
  image4: '{{IMAGE_4}}',
  image5: '{{IMAGE_5}}',
  agent: '{{AGENT_NAME}}',
  logo: '{{LOGO}}',
  headshot: '{{HEADSHOT}}',
  mobile: '{{PHONE}}',
  email: '{{EMAIL}}'
}

const generateTemplateJson = () => {
  /**
   * Main Heading
   */
  const headingAsset = new Title(content.address, scaleHelper.scale(320, RESOLUTION), scaleHelper.scale(200, RESOLUTION), 'bottom', {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: scaleHelper.scale(40, RESOLUTION) + 'px',
    align: 'left',
    lineHeight: 78,
  });
  const heading = core.clip(headingAsset.asset, 1.2, 4.2, null, null, 'left', 0.05, 0.3, 'slideRight', 'slideLeft');

  /**
   * Sub Heading
   */
   const subHeadingAsset = new Title(content.suburb, scaleHelper.scale(320, RESOLUTION), scaleHelper.scale(66, RESOLUTION), 'top', {
    font: theme.font.secondary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(22, RESOLUTION) + 'px',
    align: 'left',
    lineHeight: 78,
  });
  const subHeading = core.clip(subHeadingAsset.asset, 1.3, 3.9, null, null, 'left', 0.05, 0.065, 'slideRight', 'slideLeft');

  /**
   * Sale Type Heading (i.e. Auction)
   */
   const saleHeadingAsset = new Title(content.sale, scaleHelper.scale(320, RESOLUTION), scaleHelper.scale(100, RESOLUTION), 'top', {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: scaleHelper.scale(22, RESOLUTION) + 'px',
    align: 'left',
    lineHeight: 78,
  });
  const saleHeading = core.clip(saleHeadingAsset.asset, 1.4, 4, null, null, 'left', 0.05, -0.24, 'slideRight', 'slideLeft');

  /**
   * Property Type (i.e. House, Apartment)
   */
  const typeHeadingAsset = new Title(content.type, scaleHelper.scale(320, RESOLUTION), scaleHelper.scale(32, RESOLUTION), null, {
    font: theme.font.secondary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(17, RESOLUTION) + 'px',
    align: 'left',
    lineHeight: 78,
  });
  const typeHeading = core.clip(typeHeadingAsset.asset, 1.4, 4, null, null, 'left', 0.05, -0.08, 'fade', 'fade');

  const contentTrack = core.track([heading, subHeading, saleHeading, typeHeading]);

  /**
   * Icons
   */
  const bedIconAsset = new Icon(BED, ICONS_SIZES[RESOLUTION]);
  const bathIconAsset = new Icon(BATH, ICONS_SIZES[RESOLUTION]);
  const carIconAsset = new Icon(CAR, ICONS_SIZES[RESOLUTION]);
  const bedIcon = core.clip(bedIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.055, -0.025, 'fade', 'fade');
  const bathIcon = core.clip(bathIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.13, -0.025, 'fade', 'fade');
  const carIcon = core.clip(carIconAsset.asset, 1.4, 4, 'none', null, 'left', 0.205, -0.025, 'fade', 'fade');

  const bedIconTextAsset = new Title(content.beds, scaleHelper.scale(36, RESOLUTION), scaleHelper.scale(26, RESOLUTION), 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(18, RESOLUTION) + 'px',
    align: 'left',
  });
  const bedIconText = core.clip(bedIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.09, -0.025, 'fade', 'fade');

  const bathIconTextAsset = new Title(content.baths, scaleHelper.scale(36, RESOLUTION), scaleHelper.scale(26, RESOLUTION), 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(18, RESOLUTION) + 'px',
    align: 'left',
  });
  const bathIconText = core.clip(bathIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.165, -0.025, 'fade', 'fade');

  const carIconTextAsset = new Title(content.cars, scaleHelper.scale(36, RESOLUTION), scaleHelper.scale(26, RESOLUTION), 'center', {
    font: theme.font.primary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(18, RESOLUTION) + 'px',
    align: 'left',
  });
  const carIconText = core.clip(carIconTextAsset.asset, 1.4, 4, null, null, 'left', 0.24, -0.025, 'fade', 'fade');

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
  const agentNameAsset = new Title(content.agent, scaleHelper.scale(600, RESOLUTION), scaleHelper.scale(36, RESOLUTION), null, {
    font: theme.font.primary.family,
    color: theme.color.primary,
    size: scaleHelper.scale(26, RESOLUTION) + 'px',
    align: 'center',
  });
  const agentNameClip = core.clip(agentNameAsset.asset, 30, 6, null, null, null, 0, 0.045, 'fade');

  /**
   * Outro Logo
   */
  const logoAsset = core.assets.image(content.logo);
  const logoClip = core.clip(logoAsset, 30, 6, 'none', scaleHelper.scale(0.26, RESOLUTION, 'sd', 2), null, 0, -0.08, 'fade');

  /**
   * Outro Agent Contacts
   */
  const agentContactsAsset = new Title(`${content.mobile}<br>${content.email}`, scaleHelper.scale(600, RESOLUTION), scaleHelper.scale(64, RESOLUTION), null, {
    font: theme.font.secondary.family,
    color: theme.color.secondary,
    size: scaleHelper.scale(18, RESOLUTION) + 'px',
    align: 'center',
  });
  const agentContactsClip = core.clip(agentContactsAsset.asset, 30, 6, null, null, null, 0, -0.24, 'fade');

  const outroTrack = core.track([
    agentNameClip,
    agentContactsClip
  ]);

  const logoTrack = core.track([
    logoClip,
  ]);

  /**
   * Final edit
   */
  const tracks = [
    contentTrack,
    iconsTrack,
    headshotTrack,
    outroTrack,
    logoTrack,
    overlayTransitionTrack,
    kenburns.track
  ];

  const fonts = [
    core.font(theme.font.primary.src),
    core.font(theme.font.secondary.src)
  ]

  const soundtrack = core.soundtrack(theme.soundtrack, 'fadeOut');
  const timeline = core.timeline(tracks, soundtrack, null, fonts);
  const output = core.output('mp4', RESOLUTION);

  const template = core.edit(timeline, output);

  return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
