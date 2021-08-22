// jshint esversion:6


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
  };


// countOnly will be given an array and an object. 
//  It will return an object containing counts of everything that the input object listed.
 


const countOnly = function(allItems, itemsToCount) {
  const results = {};
    

  for (const item of allItems) {
   if (itemsToCount[item]) { 
     if (results[item]) {
       results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
  
};




const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// Output:
// ✅Assertion Passed: 1 === 1;
// ✅Assertion Passed: undefined === undefined;
// ✅Assertion Passed: 2 === 2;
// ✅Assertion Passed: undefined === undefined;
 


