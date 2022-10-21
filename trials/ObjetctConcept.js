//Dynamic Key :
/**const fn1 = (dynamicKey, string) => {
  const obj = {
    [dynamicKey]: string,
  };
  console.log('obj', obj);
};

fn1('jsVersion', 'es6');*/

/**const obj = {
  name: 'siva',
  age: 21,
};

const arr = Object.entries(obj);
// console.log('arr', arr);

const map = arr.map((data) => {
  data.map((e) => console.log('ele', e));
  // console.log('data', data);
});*/

/**const arr1 = [
  {
    name: 'siva',
    age: 21,
  },
];

const map1 = arr1.map((e) => {});
console.log('map1', map1);*/

const obj = {
  a: {
    names: 'siva',
    b: {
      age: 21,
    },
  },
};
// console.log('obj', obj.a.b.age);

const nested1 = obj ? obj.a.names : null || obj.a.b ? obj.a.b.age : null;

const c = {
  name: obj?.a?.names || null,
};
console.log('CCCC', c);

const nested2 = obj ? obj.a.names : obj.a.b ? obj.a.b.age : null;

// console.log('nestedObj1', nested1);
// console.log('nestedObj12', nested2);
