// jshint esversion:6

const tail = function(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
};

module.exports = tail;