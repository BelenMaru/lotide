// jshint esversion:6
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };


// Implement the function in order to pass the assertions for two objects are equal.
// When they have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

//eqArrays
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {     // To compare the length
    return false;
  }
  for (let i = 0; i < array1.length ; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// New function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  let objectVal = 0;
  for (const key1 in object1) {
    for (const key2 in object2) {
      if ((key1 === key2) && (object1.key === object2.key )) {
        objectVal = true;
      } else {
        objectVal = false;
      }
    }
    
  }
  return objectVal;
};


//test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual("Lighthouse Labs", "Bootcamp");

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(1, 1);

// output
// 🛑  Assertion failed: Lighthouse Labs !== Bootcamp
// ✅  Assertion passed: 1 === 1
// belenmaru@Belens-MacBook-Pro lotide % node eqObjects.js
// 🛑  Assertion failed: Lighthouse Labs !== Bootcamp
// ✅  Assertion passed: 1 === 1