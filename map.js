// jshint esversion:6

const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function(array1, array2) {
  
if(eqArrays(array1,array2)) {
  console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  
}
};


// New array based on the result of callback function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

// Test case for map function 


const test = map(words, (word) => word[0]);
console.log(test);



// To compare  the results from map with expected array results.

// console.log(assertArraysEqual(add, ["a", "b", "c"])) ; //true
// console.log(assertArraysEqual(add, ["g", "h", "k"])) ; //false


