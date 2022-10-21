const testObj = {
  //   title: '    AAA',
  //   refno: 'Ref',
  //   counterid: '1234',
  //   nested: {
  //     email: '   email1',
  //     password: '123',
  //   },
};

const a = JSON.stringify(testObj?.nested || {});
console.log('A Object', a);
console.log('A Object- Type', typeof a);
const b = JSON.parse(a);
console.log('B Object', b);
console.log('B Object- Type', typeof b);
console.log('Object Entries', Object.entries(b));
const [key, value] = Object.entries(b);
console.log('Key', key);
console.log('Value', value);
function a1() {
  console.log('2');
  for (const [key, value] of Object.entries(b)) {
    console.log('1');
    console.log('Key value', b);
    if (typeof value === 'string') b[key] = value.trim();
  }
  console.log('Test Object after Trim', b);
}
a1(testObj);

const obj = testObj;
const testObjectFn = (a = null) => {
  if (JSON.stringify(a) === '{}' || !a) {
    console.log('Error Occured', a);
  }
  console.log('A Value in Fn', a);
};
testObjectFn(obj);
