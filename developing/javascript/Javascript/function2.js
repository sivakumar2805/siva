// async function a(name) {
//   console.log('a');
//   b();
//   await d({ name });
// }

// async function b() {
//   console.log('b');
//   c();
// }

// async function c() {
//   console.log('c');
//   //   await d();
// }

// async function d({ name }) {
//   console.log(`i'm ${name}`);
//   //   console.log('d');
// }

// a('siva');

async function a() {
  console.log('a');
  console.log('Return Value from A', await b());
  //   return await b();
}

async function b() {
  console.log('b');
  return await c();
}

async function c() {
  console.log('c');
  return await d();
}

async function d() {
  return 123;
}

a();
// console.log('A Value', a());
let object = {
  type: 'object',
  properties: {
    street_address: {
      type: 'string',
    },
    country: {
      default: 'United States of America',
      enum: ['United States of America', 'Canada'],
    },
  },
  if: {
    properties: { country: { const: 'United States of America' } },
  },
  then: {
    properties: { postal_code: { pattern: '[0-9]{5}(-[0-9]{4})?' } },
  },
  else: {
    properties: { postal_code: { pattern: '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]' } },
  },
};
