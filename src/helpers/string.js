'use strict';

module.exports.capitalize = (string) => {
  if (typeof string === 'undefined' || string === null) {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}
