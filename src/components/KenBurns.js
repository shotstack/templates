'use strict';

const core = require('../core');
const string = require('../helpers/string');

module.exports = class KenBurns {
  constructor(interval, speed = null, transitionIn = null, transitionOut = null) {
    this.interval = interval;
    this.transitionIn = transitionIn;
    this.transitionOut = transitionOut;
    this.speed = speed;
    this.assets = [];
    this.timelineStart = 0;
  }

  addAsset(asset, direction = 'in', transitionIn = null, transitionOut = null) {
    let effect = null;

    if (['in', 'out'].includes(direction)) {
      effect = 'zoom' + string.capitalize(direction) + string.capitalize(this.speed)
    }

    if (['up', 'down', 'left', 'right'].includes(direction)) {
      effect = 'slide' + string.capitalize(direction) + string.capitalize(this.speed)
    }
    
    this.assets.push({ asset, effect, transitionIn, transitionOut });
  }

  set startAt(time) {
    this.timelineStart = time;
  }

  get track() {
    const clips = [];

    this.assets.forEach((asset, index) => {
      const clipStart = this.interval * index + this.timelineStart;
      const length = this.interval;
      const transitionIn = asset.transitionIn || this.transitionIn;
      const transitionOut = asset.transitionOut || this.transitionOut;

      const clip = core.clip(asset.asset, clipStart, length, null, null, null, null, null, transitionIn, transitionOut, asset.effect);

      clips.push(clip)
    });

    return core.track(clips);
  }
}