const a = [1, 2, 3];
const b = [4, 5, 6];

// const equals = (a, b) => {
//   JSON.stringify(a) === JSON.stringify(b);
// };

// console.log(equals(a, b));

/**const result = a.find((element) => {
  const data = b.find((el) => {
    return element === el;
  });
  console.log('element', element);
  console.log('el', element);
});

console.log('result', result);*/

const data = a.filter((i) => {
  console.log('IIII', i);
  return b.indexOf(i) === -1;
});

// console.log('data11', data);
