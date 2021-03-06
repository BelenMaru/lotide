// const head = require('../head.js');
// const assertEqual = require('../assertEqual.js');


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const {head}   = require('../index');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
   it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });