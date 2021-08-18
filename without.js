// jshint esversion:6


const without = function (source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let removeWord = false;
  }for(let j = 0; j < itemsToRemoved.length; j++) {
    if (source[i] === itemsToRemove[j]) {
      removeWord = true;
    }
  }
  if (removedWord === false) {
    newArr.push(source[i]);
  }
  
  return newArr;
};
  
  
