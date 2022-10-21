const fn1 = async () => {
  return 123;
};

const fn2 = () => {
  return new Promise((resolve, reject) => {
    // resolve(123);
    [...Array(100)].map((e) => e);
  });
};

const fn3 = async () => {
  console.log('1');
  const first = await fn1();
  //   console.log('second', second, new Date().getMilliseconds());
  console.log('2');
  const second = fn2();
  //   console.log('first', first, new Date().getMilliseconds());
  console.log('4');
  const func4 = await fn4();
  console.log('5');
};

// console.log(fn3(), '3');
fn3();

const fn4 = async () => {
  console.log('11');
  const first = await fn1();
  //   console.log('first', first, new Date().getMilliseconds());
  console.log('22');
  const second = fn2();
  //   console.log('second', second, new Date().getMilliseconds());
  console.log('44');
};

// console.log(fn4(), '33');
// fn4();
