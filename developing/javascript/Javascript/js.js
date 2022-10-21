const arr = [
  {
    name: 'narendar',
    age: 21,
  },
  {
    name: 'praveen',
    age: 22,
  },
  {
    name: 'siva',
    age: 23,
  },
  {
    name: 'mohan',
    age: 24,
  },
  {
    name: 'sandy',
    age: 25,
  },
];

/**const Fn2 = (ele) => {
  console.log(`Fn2 elements ${ele}`);
};

const Fn = (arr) => {
  const data = arr.forEach((e) => {
    const data2 = Fn2(e.name);
  });
};
Fn(arr);*/

const fn1 = async (a) => {
  const data = await fn2(a);
  return a;
};
const fn2 = async (a) => {
  const data = await fn3(a);
  return a;
};
const fn3 = async (a) => {
  const data = await fn4(a);
  return a;
};
const fn4 = (a) => {
  console.log(`a ->>>`, a, { data: a[0].name });
  return a;
};

fn1([{ name: 'sivaK' }]);
