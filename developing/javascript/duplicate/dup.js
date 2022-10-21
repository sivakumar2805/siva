const array = [
  { name: 'A', age: 37, email: 'a@gmail.com' },
  { name: 'B', age: 30, email: 'b@gmail.com' },
  { name: 'C', age: 42, email: 'b@gmail.com' },
  { name: 'D', age: 42, email: 'b@gmail.com' },
  { name: 'E', age: 35, email: 'c@gmail.com' },
];

const key = 'email';
// const arrayUniqueByKey = [
//   ...new Map(array.map((element) => [element[key], element])).values(),
// ];

const arrayUniqueByKey = [
  ...new Map(
    array.map((element) => {
      console.log('Element', element);
      console.log('@@@@@', [element[key], element]);
      return [element[key], element];
    })
  ).values(),
];

console.log(arrayUniqueByKey);
