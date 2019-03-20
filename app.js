// MODERN JS

//Declare a Read-only var with the const keyword
/*
function joe(string) {
  "use strict";
  const SENTENCE = string + " is cool";
  for (let i = 0; i < string.length; i++) {
    console.log(SENTENCE);
  }
}
joe("joedog");
*/

// mutate an array declared with const

const ARRAY = [555, 666, 777];

ARRAY[0] = 222;
ARRAY[1] = 333;
ARRAY[2] = 444;
console.log(ARRAY);

// prevent object mutation
/*
function freezeObj() {
  "use strict";
  const joeDog = {
    age: 10
  };
  Object.freeze(joeDog);

  try {
    joeDog.age = 25;
  } catch (ex) {
    console.log(ex);
  }
  return joeDog.age;
}
const age = freezeObj();

console.log(age);
*/
/*
// use arrow functions to write concise amonymous functions
//ES5
var magic = function() {
  return newDate();
};

// shorten above code to ES6

const joeDog = () => new Date();

const x = (x, y) => x * y;
console.log(x(5, 5));
console.log(x(53, 5.78));
console.log(x(5234, 5.9));

//You can only omit the return keyword and the curly brackets if the function is a
//single statement. Because of this, it might be a good habit to always keep them:

const z = (x, y) => {
  return x * y;
};
document.write(z(5, 5));
*/
/*
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
document.write(myConcat(["joeDog is"], ["the greatest dog ever"]));
*/
// shorten to
/*
const myConcat = (arr1, arr2) => arr1.concat(arr2);
document.write(myConcat(["joeDog is so"], [" super cool"]));
*/

// Set Default parameters for your funtions
/*
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
document.write(increment(5, 2));
document.write(increment(5));
*/

// use the rest operator with function parameters
// below is old way

/*const sum = (function() {
  return function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
document.write(sum(1, 2, 3));
*/

// new way but same idea below

/*
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

document.write(sum(1, 4, 6, 77, 686));
*/

// use the spread operator to evaluate arrays in-place
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  arr2 = arr1; // change this line
  arr1[0] = 'potato'
})();
console.log(arr2);
*/

//scope with var vs. let

/*
function checkScope() {
  "use strict";
  let i = "function scope"; // var i
  if (true) {
    let i = "block scope";
    console.log("Block scope", i);
  }
  console.log("Function scope", i);
  return i;
}

checkScope();
*/
