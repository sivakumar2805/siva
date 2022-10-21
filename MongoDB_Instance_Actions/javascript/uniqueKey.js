const arrOfObj = [
  {
    name: 'siva',
    age: 21,
  },
  {
    name: 'kumar',
    age: 22,
  },
  {
    name: 'kumar',
    age: 21,
  },
];

const unique = [...new Set(arrOfObj.map((item) => item.age))];

console.log(unique);
