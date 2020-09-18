'use strict';

const core = require('../core');

module.exports = class Panel {
    constructor(width = 100, height = 100, color = '#ffffff', start = 0, length = 5, position = null, x = null, y = null) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = position;
        this.x = x;
        this.y = y;
        this.start = start;
        this.length = length;
    }

    getTrack() {
        const panelAsset = core.assets.html(
            `<p>&nbsp;</p>`,
            null,
            this.width,
            this.height,
            this.color
        );
        const panelClip = core.clip(panelAsset, this.start, this.length, null, null, this.position, this.x, this.y);
        const panelTrack = core.track([panelClip]);

        return panelTrack;
    }
}