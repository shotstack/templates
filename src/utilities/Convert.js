'use strict'

const RESOLUTIONS = {
    sd: {
        x: 1024,
        y: 576
    },
    hd: {
        x: 1280,
        y: 720
    }
}

const convertPixelsToDecimals = (target, original) => {
    let percentage = 1 - ((original - target) / original);
    return Math.round(percentage * 1000) / 1000;
}

// class Layout
module.exports = class Convert {

    //scaleAssetToSize / Pixels to Percentage
    // containAssetTo size
    assetPixelsToDecimal(target, original) {
        return convertPixelsToDecimals(target, original); // scale image to a container or predermined size, i.e. scale and image to fit a specific size
    }

    // padLeft, Right, Top, Bottom (or margin)
    viewportPixelsToDecimal(pixels, resolution, axis) {
        const original = RESOLUTIONS[resolution][axis];
        return convertPixelsToDecimals(pixels, original); // workout the offset based on the screen size, i.e. padding from edge of video in pixels to percentage
    }
}
