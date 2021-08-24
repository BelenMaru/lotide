
const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
const {assert} = require("chai");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {

 it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  // it("returns [] for [1]", () => {
  //   assert.deepEqual(tail([1]), []);
  // });
});
