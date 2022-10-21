const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.reduce((previousValue, currentValue) => {
  console.log('initialValue', initialValue);
  console.log('PV', previousValue);
  console.log('CV', currentValue);
  return previousValue + currentValue;
}, 0);

const data = sumWithInitial;
console.log('data', data);
// expected output: 10

// const array = [15, 16, 17, 18, 19];

// function reducer(previous, current, index, array) {
//   const returns = previous + current;
//   console.log(
//     `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// }

// const arr = array.reduce(reducer);
// console.log('arr', arr);
