// jshint esversion:6





// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length ; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
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


// TEST CODE
// ...