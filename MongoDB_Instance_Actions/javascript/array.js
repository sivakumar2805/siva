const numbers = [1, 2, 3, 4, 5];

/**const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}*/
// numbers is now [2, 4, 6, 8, 10]

const foreach = numbers.forEach((element, index) => {
  numbers[index] = element * 2;
});
// numbers.map((e) => {
//   console.log('eee', e);
// });

console.log('Numbers', numbers);
