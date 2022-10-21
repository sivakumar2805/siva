// const arr = [100, 98, 99];

// const obj = {
//   name: 'siva',
//   age: 21,
//   degree: 'BCA',
// };

// obj['marks'] = arr;
// obj['value'] = {
//   email: 'siva@gmail.com',
// };

// console.log('object', obj);

// const data = obj.marks;

// data.forEach((e) => {});

const array = [
  {
    name: 'siva',
    age: 21,
  },
  {
    name: 'kumar',
    age: 22,
  },
  {
    name: 'kamal',
    age: 23,
  },
];

array.forEach((e) => {
  e = { name: 'praveen', age: 24 };
});
console.log('array', array);
