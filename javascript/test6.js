const validEmail = (email) => {
  const regexEmail = /gaeprojects.com$/;
  return regexEmail.test(email);
};

const function_Vaild = (email) => {
  const data = validEmail(email);
  console.log('data', data);
  const result = !data
    ? { status: 400, data: 'Email Is Not Valid' }
    : { status: 200, data: 'Done' };
  return result;
};

// console.log(function_Vaild('siva@gaeprojects.com'));

// const removeWhiteSpace = (string) => {
//   const regexString = /\s/g;
//   //   console.log('1', string.match(regexString));
//   console.log('2', regexString.test(string));
//   return string.match(regexString);
// };

// removeWhiteSpace('hello welcome');

const file = require('./test7.ts');

console.log('file', file);
