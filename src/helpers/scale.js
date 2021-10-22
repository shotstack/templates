'use strict';

const resolutions = {
  'sd': 576,
  'hd': 720,
  '1080': 1080,
}

module.exports.scale = (value, to, from = 'sd', decimals = 0) => {
  if (!resolutions.hasOwnProperty(from)) throw `Resolution "${from}" not supported, must be one of [sd, hd, 1080]`;
  if (!resolutions.hasOwnProperty(to)) throw `Resolution "${to}" not supported, must be one of [sd, hd, 1080]`;

  const multiplier = resolutions[to] / resolutions[from];

  if (decimals === 0) {
    return parseInt(value * multiplier);
  }
  
  return parseFloat((value * multiplier).toFixed(decimals));
}
