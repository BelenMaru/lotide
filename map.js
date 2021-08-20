// jshint esversion:6

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};
const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(array1, array2) {
  
if(eqArrays(array1,array2)) {
  console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  
}
};

console.log(assertArraysEqual(results1, ["g","c", "t", "m",'t'])); //true
console.log(assertArraysEqual(results1, ["g","c", "t", "m",]));  //false