// jshint esversion:6

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };

// Takes in an object and a value. 
// It should scan the object and return the first key which contains the given value. 
// If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(a, b) { 
  for (const key in a) {
    if (a[key] === b) {
      return key;
    }
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// output:
// ✅  Assertion passed: sci_fi === sci_fi
// ✅  Assertion passed: drama === drama
// ✅  Assertion passed: undefined === undefined