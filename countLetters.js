// jshint esversion:6

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function (sentence) {
   const letter = {};
  sentence = sentence.split(" ").join("");

  for (let item of sentence) {
   if (letter[item]) {
     letter[item] += 1;
   } else {
     letter[item] = 1;
   }
   return letter;
  }
};


const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1); //passed
assertEqual(result["h"], 2); //=4 failed
assertEqual(result["t"], 2); //passed


// ✅Assertion Passed: 1 === 1
// ❌Assertion Failed: 4 !== 2
// ✅Assertion Passed: 2 === 2