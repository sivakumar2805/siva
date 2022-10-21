const object = {
  name: 'siva',
  age: 21,
  email: 'siva@gae.com',
};

// console.log('object', object);

const data = JSON.parse(JSON.stringify(object));
console.log('data', data);
