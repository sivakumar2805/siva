let words = ['apple', 'ball', 'cat', 'dog'];

// copies element from index 0 to index 3
words.copyWithin(3, 0);

// modifies the original array
// console.log(words);

// Output:
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]

function person(items) {
  let arr = [];
  arr.push(...items);
  return arr;
}

// console.log(
//   person([
//     { name: 'siva', age: 21 },
//     { name: 'siva', age: 21 },
//     { name: 'siva', age: 21 },
//     { name: 'siva', age: 21 },
//   ])
// );

const obj = {
  person: {
    name: 'siva',
    intersts: {
      interst1: 'drawing',
    },
  },
};

// console.log(obj.person?.intersts?.interst1);
console.log();
