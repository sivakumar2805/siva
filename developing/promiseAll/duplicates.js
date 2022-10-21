// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// const unique = Array.from(new Set(numbers));

// console.log(unique);
// [ 1, 2, 3, 4, 5, 6 ]

const array = [
  {
    name: 'Steven Smith',
    Country: 'England',
    Age: 35,
  },
  {
    name: 'Hannah Reed',
    Country: 'Scottland',
    Age: 23,
  },
  {
    name: 'Steven Smith',
    Country: 'England',
    Age: 35,
  },
  {
    name: 'Robert Landley',
    Country: 'England',
    Age: 84,
  },
];

const dup = array.filter((item, idx) => idx);

const numbers1 = [1, 2, 3, 2, 4, 5, 5, 6];

const duplicates = numbers1.filter(
  (item, index) => index !== numbers1.indexOf(item)
);

console.log(duplicates);
// [ 2, 5 ]
