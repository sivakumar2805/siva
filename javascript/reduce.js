let initialValue = 0;

const arrOfObj = [
  {
    name: 'siva',
    age: 21,
  },
  {
    name: 'praveen',
    age: 22,
  },
  {
    name: 'kumar',
    age: 23,
  },
];

let total = 0;
const data = arrOfObj.map((e) => {
  return (total += e.age);
});
console.log('totaltotal', total);

const numbers = [1, 2, 3, 4, 5, 6];

/* function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21
 */

// using arrow function
let summation = arrOfObj.reduce((acc, cv) => {
  return acc + cv.age;
}, initialValue);
console.log(summation); // 21
