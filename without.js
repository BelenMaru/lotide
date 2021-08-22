// jshint esversion:6

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length ; i++) {
    if(array1[i] !== array2[i]) {
      return false
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
if(eqArrays(array1,array2)) {
  return eqArrays(array1,array2)
  console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
  };

// Implement without which will return a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
//if the source exist, index of the array return >= 0
if (itemsToRemove.indexOf(source[i]) < 0) {
  newArr.push(source[i]);
  }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(
  assertArraysEqual(without(words, ["lighthouse"]), [
    "hello",
    "world",
    "lighthouse",
  ])
);

// output
// 🛑  Assertion failed: hello,world !== hello,world,lighthouse