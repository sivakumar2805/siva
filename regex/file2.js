const validEmail = (email) => {
  const regexEmail = /gaeprojects.com$/;
  return regexEmail.test(email);
};

// const function_Vaild = (email) => {
//   const data = validEmail(email);
//   console.log('data', data);
//   const result = !data
//     ? { status: 400, data: 'Email Is Not Valid' }
//     : { status: 200, data: 'Done' };
//   return result;
// };

const function_Vaild = (email) => {
  return new Promise((resolve, reject) => {
    const data = validEmail(email);
    console.log('data', data);
    if (!data) {
      reject({ data: 'Invalid Email' });
    }
    resolve({ data: 'Correct Email' });
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
function_Vaild('siva@gaeprojects.com');
