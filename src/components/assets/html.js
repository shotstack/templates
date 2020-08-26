const Shotstack = require('shotstack-sdk');

module.exports = (html, css, width = 1280, height = 720, background = null, position = null) => {
    let fadeIn = new Shotstack.Transition;
    fadeIn.setIn('fade');

    let htmlAsset = new Shotstack.HtmlAsset;
    htmlAsset
        .setHtml(html)
        .setCss(css)
        .setWidth(width)
        .setHeight(height)
        .setBackground(background)
        .setPosition(position);

    return htmlAsset;
}
