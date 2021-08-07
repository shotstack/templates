'use strict'

const core = require('../../core');
const { manropeExtraBold, manropeLight } = require('../../consts/fonts');
const KenBurns = require('../../components/KenBurns');
const Title = require('../../components/Title');
const timelineHelper = require('../../helpers/timeline');

const generateTemplateJson = () => {
  /**
   * Main Heading
   */
  const headingAsset = new Title('192 STOREY STREET', 360, 200, 'bottom', {
    font: manropeExtraBold.family,
    color: '#f0c20c',
    size: '40px',
    align: 'left',
    lineHeight: '70',
  });

  const heading = core.clip(headingAsset.asset, 1.2, 4.2, null, null, 'left', 0.05, 0.3, 'slideRight', 'slideLeft');
  const headingTrack = core.track([heading]);

  /**
   * Kenburns image slideshow
   */
  const kenburns = new KenBurns(6, null, 'slow');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-1.jpg'), 'right');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-2.jpg'), 'left');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-3.jpg'), 'in');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-4.jpg'), 'up');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-6.jpg'), 'down');
  kenburns.addAsset(core.assets.image('https://shotstack-content.s3-ap-southeast-2.amazonaws.com/realestate-delete-me/home-1.jpg'), 'out');
  kenburns.startAt = 0;

  /**
   * Overlay transitions
   */
  const TRANSITION_POINT = 1.44;
  const TRANSITION_LENGTH = 3;

  const introOverlayInAsset = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/overlays/double-arrow-left-open-in-black.mov');
  const introOverlayInClip = core.clip(introOverlayInAsset, 0, timelineHelper.getOverlapStartTime(0, 6, 1.52));

  const introOverlayOutAsset = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/overlays/double-arrow-left-open-out-black.mov');
  const introOverlayOutClip = core.clip(introOverlayOutAsset, timelineHelper.getOverlapStartTime(0, 6, 1.48), 2);

  const overlayTransitionAsset = core.assets.video('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/overlays/double-arrow-right-transition-black.mov');
  const overlayTransitionClip1 = core.clip(overlayTransitionAsset, timelineHelper.getOverlapStartTime(6, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionClip2 = core.clip(overlayTransitionAsset, timelineHelper.getOverlapStartTime(12, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionClip3 = core.clip(overlayTransitionAsset, timelineHelper.getOverlapStartTime(18, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionClip4 = core.clip(overlayTransitionAsset, timelineHelper.getOverlapStartTime(24, 6, TRANSITION_POINT), TRANSITION_LENGTH);
  const overlayTransitionTrack = core.track([
    introOverlayInClip,
    introOverlayOutClip,
    overlayTransitionClip1,
    overlayTransitionClip2,
    overlayTransitionClip3,
    overlayTransitionClip4,
  ]);

  /**
   * Final edit
   */
  const tracks = [
    headingTrack,
    overlayTransitionTrack,
    kenburns.track
  ];

  const fonts = [
    core.font(manropeExtraBold.src),
    core.font(manropeLight.src)
  ]

  const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/freepd/advertising.mp3', 'fadeOut');
  const timeline = core.timeline(tracks, soundtrack, null, fonts);
  const output = core.output('mp4', 'sd');

  const template = core.edit(timeline, output);

  return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
