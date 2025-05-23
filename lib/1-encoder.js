'use strict';

var encoder = function(phrase) {
  return phrase
    .replace(/a/g, '4')
    .replace(/e/g, '3')
    .replace(/g/g, '9')
    .replace(/i/g, '1')
    .replace(/o/g, '0')
    .replace(/s/g, '5')
    .replace(/t/g, '7')
    .replace(/ /g, '$')
    .split('')
    .reverse()
    .join('');
};

module.exports = encoder;
