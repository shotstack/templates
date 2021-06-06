'use strict';

const core = require('../core');
const string = require('../helpers/string');

module.exports = class KenBurns {
  constructor(interval, transition = null, speed = null) {
    this.interval = interval;
    this.transition = transition;
    this.speed = speed;
    this.assets = [];
  }

  addAsset(asset, direction = 'in') {
    let effect = null;

    if (['in', 'out'].includes(direction)) {
      effect = 'zoom' + string.capitalize(direction) + string.capitalize(this.speed)
    }

    if (['up', 'down', 'left', 'right'].includes(direction)) {
      effect = 'slide' + string.capitalize(direction) + string.capitalize(this.speed)
    }
    
    this.assets.push({ asset, effect });
  }

  get track() {
    const clips = [];

    this.assets.forEach((asset, index) => {
      let start = this.interval * index;
      let length = this.interval;

      const clip = core.clip(asset.asset, start, length, null, null, null, null, null, this.transition, this.transition, asset.effect);

      clips.push(clip)
    });

    return core.track(clips);
  }
}