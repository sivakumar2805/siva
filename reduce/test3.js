const fn = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject({ data: 'Invalid ' });
    }
    resolve({ value: 'OK', data });
  })
    .then((res) => {
      console.log('Response', res);
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

fn('s');

/* const fn2 = new Promise((res, rej) => {
  res(1);
});
console.log(fn2);
 */
