'use strict';

const core = require('../core');

const LIBRARY_URL = 'https://templates.shotstack.io';
const LIBRARY_ICONS_PATH = 'basic/asset/image/icon'

module.exports = class Icon {
    constructor(icon, size = '26px', style = 'slimline', color = 'white') {
        this.icon = icon;
        this.size = size;
        this.style = style;
        this.color = color;
    }

    get asset() {
        const asset = core.assets.image(
            `${LIBRARY_URL}/${LIBRARY_ICONS_PATH}/${this.style}/${this.color}/${this.size}/${this.icon}.png`,
        );

        return asset;
    }
}