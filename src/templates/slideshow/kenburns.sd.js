'use strict'

const core = require('../../core');
const KenBurns = require('../../components/KenBurns');

const generateTemplateJson = () => {
  const kenburns = new KenBurns(2, null, 'fast');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy1.jpg'), 'in');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy2.jpg'), 'out');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy3.jpg'), 'left');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy4.jpg'), 'right');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy5.jpg'), 'up');
  kenburns.addAsset(core.assets.image('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/images/happy6.jpg'), 'down');

  const track = kenburns.track;

  const soundtrack = core.soundtrack('https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/unminus/happy.mp3');
  const timeline = core.timeline([track], soundtrack);
  const output = core.output('mp4', 'sd');

  const template = core.edit(timeline, output);

  return template;
}

module.exports.generateTemplateJson = generateTemplateJson;
