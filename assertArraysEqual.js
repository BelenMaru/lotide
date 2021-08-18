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


const eqArrays = function (array1, array2) {
  //return a subset of a given array, removing unwanted elements.
  const newArr = [];
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

