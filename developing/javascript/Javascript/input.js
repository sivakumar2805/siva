const input = {
  data: {
    name: 'siva',
    name1: 'siva',
    name2: 'siva',
  },
};

const data = (inputData) => {
  //   console.log('input', inputData);
  console.log(Object.keys(inputData.data));
  //Object.keys(obj).length === 0
  const details = inputData?.data
    ? Object.keys(inputData.data).length === 0
      ? 'Data is Empty'
      : 'No InputData'
    : 'No InputData';
  // ? Object.keys(inputData.data).length === 0
  //   ? 'Data is Undefined'
  //   : 'Data is Empty'
  // : 'No InputData';

  console.log('details', details);
  //   if (!inputData.data) {
  //     console.log('iii', inputData.data === {});
  //     return { status: 400 };
  //   }
  //   return { status: 200 };
  let b = 5;
  let a = b === 1 ? 'Then' : 'default';
  console.log('AA', a);
};

console.log(data(input));
['name', 'name1', 'name2'];

async function a(name) {
  b();
  await d({ name });
  console.log('a');
}

async function b() {
  console.log('b');
  c();
}

async function c() {
  console.log('c');
  //   await d();
}

async function d(param) {
  const { name } = param;
  console.log(`i'm ${name}`);
  //   console.log('d');
}

a('siva');
