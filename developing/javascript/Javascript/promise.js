const second = () => {
  console.log('Hi,from second()');
};

const first = () => {
  console.log('Hi,from first()');
  second();
  console.log('Good Bye!');
};

first();

// Asynchronous Javascript

// const second = () => {
//   setTimeout(() => {
//     console.log("Hi,from second()");
//   }, 2000);
// };

// const first = () => {
//   console.log("Hi,from first()");
//   second();
//   console.log("Good Bye!");
//   console.log("Good Bye!");
//   console.log("Good Bye!");
//   console.log("Good Bye!");
//   console.log("Good Bye!");
// };

// first();

// function greeting(name) {
//   alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }
// const value = processUserInput(greeting);
// console.log(value);

// const greeting = (name) => {
//   alert(`Hello, ${name}`);
// };

// const processUserInput = (callback) => {
//   const name = prompt("Please enter your name.");
//   callback(name);
// };
// const value = processUserInput(greeting);
// console.log(value);

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'resolve1');
// }).then((a) => {
//   // console.log('then1');
//   return a;
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000, 'reject2');
// }).then((a) => {
//   console.log('then2');
//   return a;
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'resolve3');
// }).then((a) => {
//   console.log('then3');
//   return a;
// });

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log('then', values);
//   })
//   .catch((err) => {
//     console.log('catch', err);
//     throw err;
//   });
