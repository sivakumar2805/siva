const a = [0, 1, 2, 3, 0, 4];

// const d = a.sort((a, b) => {
//   return b - a;
// });
a.sort((a, b) => {
  return b - a;
});
// const c = a.sort((a, b) => {
//   return a - b;
// });
// console.log(b);

// console.log(a);
// console.log(b);

// console.log(c);

const message = 'ball bat';

// replace the first b with c
let result = message.replace('b', 'c');
console.log(result);

// Output: call bat
