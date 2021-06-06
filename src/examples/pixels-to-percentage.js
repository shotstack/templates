'use strict'

const Convert = require('../utilities/Convert');

const convert = new Convert();
const scale = convert.assetPixelsToDecimal(360, 640); // i.e. scale an image to a specific target size, from 640 to 360
console.log(scale);

const offset = convert.viewportPixelsToDecimal(100, 'sd', 'x');
console.log(offset);
