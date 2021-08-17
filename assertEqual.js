// jshint esversion:6


// Exmaple 1
// FUNCTION IMPLEMENTATION
const sum = function(a, b) { 
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!


// Example 2
// const assertEqual = function(actual,expected) {
//  if (actual === expected) {
// console.assert("Assertion passed");
//  } else {
//  console.assert("Assertion Failed");

// };

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Example 3

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
