const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

let first_promise = new Promise((resolve, reject) => {
  resolve('Resolved First after 1 second');
});

let second_promise = new Promise((resolve, reject) => {
  resolve('Resolved First after 2 seconds');
});

let third_promise = new Promise((resolve, reject) => {
  resolve('Resolved First after 3 seconds');
});

try {
  let result = Promise.all([first_promise, second_promise, third_promise]);
  result.then((data) => console.log(data));
} catch (error) {
  console.log(error);
}

// const a = (x, y) => {
//   return new Promise((resolve, reject) => {
//     if (x + y > 0) {
//       resolve(x + y);
//       console.log(`sum is greater `);
//     } else {
//       reject('sum is less than zero');
//     }
//   });
// };

// const b = (x, y) => {
//   a(x, y)
//     .then((result) => {
//       console.log('sum = ' + result);
//     })
//     .catch((err) => {
//       console.log('error', err);
//     });
// };

// b(2, 9);

const func1 = (x, y) => {
  return new Promise((resolve, reject) => {
    if (x + y > 0) {
      resolve('success');
    } else {
      reject('error');
    }
  });
};

const func2 = (x, y) => {
  func1(x, y)
    .then((val) => {
      console.log('sum = ' + val);
    })
    .catch((err) => {
      console.log('error', err);
    });
};

func2(2, 2);
