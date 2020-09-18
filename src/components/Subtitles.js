'use strict';

const core = require('../core');

module.exports = class Subtitle {
    constructor(width, height, css, position = null, x = null, y = null, background = null) {
        this.width = width;
        this.height = height;
        this.css = css;
        this.position = position;
        this.x = x;
        this.y = y;
        this.background = background;
        this.track = [];
    }

    addSubtitle(html, start, length) {
        const subtitleAsset = core.assets.html(
            html,
            this.css,
            this.width,
            this.height,
            this.background
        );
        const subtitleClip = core.clip(subtitleAsset, start, length, null, null, this.position, this.x, this.y);

        this.track.push(subtitleClip)
    }

    getTrack() {
        const subtitleTrack = core.track(this.track);

        return subtitleTrack;
    }
}