// jshint esversion:6




const assertArraysEqual = function(actual, expected) {

  };


// ACTUAL FUNCTION

const middle = function(arr) {
  if (array.length < 2) {
    return [];
  } else if (array.length  % 2 === 0) {
    return arr.slice(arr.length / 2 -1, arr.length / 2+1);
  } else {
    return arr[Math.floor(arr.length / 2 )];
  }
};

module.exports = middle;
