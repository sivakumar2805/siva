const fn = new Promise((resolve, reject) => {
  const obj = {
    title: 'quote',
    phone: '12345',
  };
  return resolve(obj);
});
const a = fn;
a.then((res) => {
  console.log('res', res);
}).catch((err) => {
  console.log('err', err);
});

const promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });
