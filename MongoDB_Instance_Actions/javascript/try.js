// const num = '2.56';
// console.log(typeof num);
// console.log(typeof parseInt(num));
// console.log(typeof parseFloat(num));

const fn1 = (name, greeting) => {
  return `hello ${name} Good ${greeting} `;
};

const fn2 = (name, greeting) => {
  const data = fn1(name, greeting);
  console.log('data', data);
};
console.log(fn2('siva', 'morning'));
