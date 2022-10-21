let promise1 = new Promise((resolve, reject) => {
  resolve('first promise');
});

let promise2 = new Promise((resolve, reject) => {
  resolve('second promise');
});

let promise3 = new Promise((resolve, reject) => {
  resolve('third promise');
});

const fn1 = async () => {
  console.log('fn1');
  console.log(a);
};

const fn2 = async () => {
  console.log('fn2');
  console.log('aaa');

  console.log('ffff');
  console.log('vvvv');
};
const fn3 = async () => {
  console.log('fn3');
};
const fn4 = async () => {
  console.log('fn4');
};

const data = async () => {
  const result = await Promise.all([fn1(), fn2(), fn3(), fn4()]);
  //   result
  //     .then((msg) => {
  //       console.log('msg', msg);
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //     });

  console.log('result', result);
};

data();
