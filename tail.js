// jshint esversion:6

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
};

// [1, 2, 3] === [1, 2, 3] // => false
// [1, 2, 3] == [1, 2, 3] // => false

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
