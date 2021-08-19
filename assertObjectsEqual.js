// jshint esversion:6

const eqObjects = function(object1, object2) {
  let val = 0;
  for (const key1 in object1) {
    for (const key2 in object2) {
      if ((key1 === key2) && (object1.key === object2.key )) {
        return true;
      } else {
        return false;
      }
    }
  }
  
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;


if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  
  }

};

const ab = { a: "1", b: "2" };
const cd = { c: "1", d: ["2", 3] };
const ba = { b: "2", a: "1" }; 

  //assertObjectsEqual((eqObjects(ba, ab)), true);
  assertObjectsEqual(ab, ba);

  //console.log(`Example label: ${inspect(actual)}`);