'use strict';

const core = require('../core');

module.exports = class Title {
    constructor(text, width = 600, height = 300, position = null, options = null) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.position = (position) ? position : 'center';
        this.options = options;
    }

    get asset() {
        const font = this.options.font ? `font-family: "${this.options.font}";` : '';
        const color = this.options.color ? this.options.color : '#ffffff';
        const size = this.options.size ? `font-size: ${this.options.size};` : '';
        const align = this.options.align ? `text-align: ${this.options.align};` : '';
        const bold = this.options.bold ? 'font-weight: bold;' : '';
        const underline = this.options.underline ? 'text-decoration: underline;' : '';
        const italic = this.options.italic ? 'text-style: italic;' : '';
        const lineHeight = this.options.lineHeight ? `line-height: ${this.options.lineHeight};` : '';

        const asset = core.assets.html(
            `<p>${this.text}</p>`,
            `p { ${font} color: ${color}; ${size} ${align} ${bold} ${underline} ${italic} ${lineHeight} }`,
            this.width,
            this.height,
            null,
            this.position
        );

        return asset;
    }
}