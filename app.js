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
