'use strict';

var decoder = function(encoded) {
  return encoded
    .split('')
    .reverse()
    .join('')
    .replace(/\$/g, ' ')
    .replace(/7/g, 't')
    .replace(/5/g, 's')
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/9/g, 'g')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a');
};

module.exports = decoder;
