// jshint esversion:6

const assertArraysEqual = function(array1, array2) {
if(eqArrays(array1,array2)) {
  console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,3]);


