// const error = new Error('An error message');
// // console.log('1', error);
// // console.log('2', error.stack);
// console.log('3', (error.http_code = 404));
// console.log('@@@', error);

// console.log('data', new Error('Ran out of coffee'));

const client = 'siva';

if (client !== 'akash') {
  throw new Error('Not Same');
}
