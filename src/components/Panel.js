'use strict';

const core = require('../core');

module.exports = class Panel {
    constructor(width = 100, height = 100, color = '#ffffff') {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get asset() {
        const asset = core.assets.html(
            `<p>&nbsp;</p>`,
            null,
            this.width,
            this.height,
            this.color
        );

        return asset;
    }
}