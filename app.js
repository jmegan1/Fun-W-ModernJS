// MODERN JS

/*
joedog(' joedog');

function joe(string){
  const sentence = string + ' is cool';
  for(let i = 0; i < string.length; i++){
    console.log(sentence);
  }
}
joe('joedog');
*/

// mutate an array declared with const
/*
const array = [555, 666, 777];

array[0] = 222;
array[1] = 333;
array[2] = 444;
console.log(array)
*/

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
