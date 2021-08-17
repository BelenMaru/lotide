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

const head = function(){
  return array[0] ?  array [0] : undefined;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");