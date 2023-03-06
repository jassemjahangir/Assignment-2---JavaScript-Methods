/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {

  let myArray = [];

  for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    myArray.push(callbackFn(this[i], i, this)); // callbackFn is 
  }

  return myArray;

};

/*
// MAP TEST


let myArray1 = [1, 2, 3, 4, 5];
let myArray2 = [1, 2, , 4, 5];

const map1 = myArray2.myMap(x => x * 2); // // callbackFn is x => x * 2
console.log(map1);

const arr = ['apple', 'cat', 'dog'];
// const map2 = arr.myMap((x, i, ar) => `${x} is in index ${i}, the entire array is ${ar}`);
const map2 = myArray1.myMap((x, i, ar) => {
  if (i % 2 == 1) {
    return x * 100;
  } else {
    return x
  }
})
console.log(map2);
*/



// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  // Place your code here.
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  // Place your code here.
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};