'use strict';

const core = require('../core');

const OPTIMUM_GAP_DURATION = 0.56;

module.exports = class Carousel {
    constructor(interval, direction, delay = 0, startOnFirstAsset = true, finishOnLastAsset = true) {
        this.interval = interval;
        this.direction = direction;
        this.delay = delay;
        this.startOnFirstAsset = startOnFirstAsset;
        this.finishOnLastAsset = finishOnLastAsset;
        this.assets = [];
    }

    addAsset(asset) {
        this.assets.push(asset);
    }

    get track() {
        const clips = [];

        this.assets.forEach((asset, index) => {
            let transitionIn = 'carousel' + this.direction.charAt(0).toUpperCase() + this.direction.slice(1);
            let transitionOut = 'carousel' + this.direction.charAt(0).toUpperCase() + this.direction.slice(1);
            let start = this.interval * index;
            let length = this.interval;

            if (index !== 0) {
                start = start - (OPTIMUM_GAP_DURATION - this.delay);
                length = length + (OPTIMUM_GAP_DURATION - this.delay)
            }

            if (this.startOnFirstAsset && index === 0) {
                transitionIn = null;
            }

            if (this.finishOnLastAsset && index === this.assets.length - 1) {
                transitionOut = null;
            }

            const clip = core.clip(asset, start, length, null, null, null, null, null, transitionIn, transitionOut);

            clips.push(clip)
        });

        return core.track(clips);
    }
}