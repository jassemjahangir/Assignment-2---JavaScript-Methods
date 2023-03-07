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
    return x;
  }
})
console.log(map2);
*/



// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  let myArray = [];

  for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    if (callbackFn(this[i], i, this)) // callbackFn is 
      myArray.push(this[i]);
  }

  return myArray;
};

// Filter test
/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);
*/

// SOME //
Array.prototype.mySome = function (callbackFn) {

  for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    if (callbackFn(this[i], i, this)) // callbackFn is 
      return true;
  }

  return false;

};

/*
const array = [1, 2, 3, 4, 5];
const array1 = [1, 1, 1, 1, 1];
// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.mySome(even));
// Expected output: true
console.log(array1.mySome(even));
*/

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    if (!(callbackFn(this[i], i, this))) // callbackFn is 
      return false;
  }

  return true;
};

/*
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 59, 29, 10, 13];

console.log(array1.myEvery(isBelowThreshold));
// Expected output: true
*/

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  let value = 0;
  let accumulator = 0;
  for (let i = 0; i < this.length; i++) { // "this" keyword refers to the array being called.

    if (this[i] === undefined) continue;
    // callbackFn can take up to 4 input parameters:

    value += callbackFn(accumulator, this[i], i, this); // callbackFn is 
  }
  return value;
};

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 8
*/

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement)
      return true;

  }
  return false;
};

/*
const array1 = [1, 2, 3];

console.log(array1.myIncludes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.myIncludes('cat'));
// Expected output: true

console.log(pets.myIncludes('at'));
// Expected output: false
*/

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement)
      return i;

  }
  return -1;
};

/*
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.myIndexOf('bison'));
// Expected output: 1

console.log(beasts.myIndexOf('giraffe'));
// Expected output: -1
*/

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  for (let i = this.length; i >= 0; i--) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement)
      return i;

  }
  return -1;
};
/*
const animals = ['Dodo1', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.myLastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.myLastIndexOf('Tiger'));
// Expected output: 1

console.log(animals.myLastIndexOf('Dodo1'));
*/
// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};