// const mongoDB = require('./mongoDB');

const data = [
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

const array = data.map((e, key) => {
  console.log('key', key);
  console.log('element', e.name);
  const { name } = e;
  //   e['lastname'] = e.name;
  //   console.log('ele', (e['lastname'] = e.name));
  const value = name;
  console.log(value);
});

// const array1 = data.forEach((e) => {
//   const { name } = e;
//   console.log('ele', e);
//   console.log('name', name);
//   data['blank'] = name;
// });

// console.log('array1', array1);
// console.log('array', array);
