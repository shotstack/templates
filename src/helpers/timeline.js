'use strict';

module.exports.getOverlapStartTime = (obscuredClipStart, obscuredClipLength, overlapLength) => {
  return obscuredClipStart + obscuredClipLength - overlapLength;
}
