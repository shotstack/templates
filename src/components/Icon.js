'use strict';

const core = require('../core');

const LIBRARY_URL = 'https://templates.shotstack.io';
const LIBRARY_ICONS_PATH = 'basic/asset/image/icon'

module.exports = class Icon {
    constructor(icon, style = 'slimline', color = 'white', size = '24px') {
        this.icon = icon;
        this.style = style;
        this.color = color;
        this.size = size;
    }

    get asset() {
        const asset = core.assets.image(
            `${LIBRARY_URL}/${LIBRARY_ICONS_PATH}/${this.style}/${this.color}/${this.size}/${this.icon}.png`,
        );

        return asset;
    }
}