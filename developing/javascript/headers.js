/* let myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

const myRequest = new Request('flowers.jpg', myInit);

const myContentType = myRequest.headers.get('Content-Type'); // returns 'image/jpeg'
console.log(myContentType); */

const ax = require('axios');
let token = 'eeb2501c-3ffa-4490-98d7-8b1ab1af8c5f';
const save = ax
  .get(`http://192.168.0.151:5135/api/v1/tandc/list/wp`, {
    params: { offset: 0, pagesize: '1' },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => {
    console.log('Response', res.data);
  })
  .catch((err) => {
    console.log('Error', err);
  });

const signIn = ax.post(`http://192.168.0.151:5135/api/v1/auth/signin`, {
  data: {
    email: 'sivakumar.h@gaeprojects.com',
    password: '123456',
  },
});

console.log('signin', signIn);
