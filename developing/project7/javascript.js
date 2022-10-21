// const numbers = [5, 57, 32, 23, 1, 35, 7];
// numbers.sort();

// console.log(numbers);

// //Array Destructing
// function getScores() {
//   return [70, 80, 90];
// }

// let scores = getScores();

// let [x, y, z] = scores;

// console.log(x); // 70
// console.log(y); // 80
// console.log(z); // 90

// function getScores() {
//   return 70, 80;
// }

// let [x, y, z] = getScores();

// console.log(x); // 70
// console.log(y); // 80
// console.log(z); // undefined

const person = function (name) {
  setTimeout(() => {
    return `Hello ${name}`;
  }, 5000);
};

// console.log(person('siva'));

const person2 = async () => {
  console.log('HIIIIIIIIIIIIIIIIIII');
  const value = await person();
  console.log('value', value);
};
const assign = person2();
console.log(assign);
