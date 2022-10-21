const { signIn, quoteAxios } = require('./auth');
const jsondata = require('./quote.json');

/**const authFn = async () => {
  const res = await signIn('testing@gaeprojects.com', '12345');
  return { token: res.data.data.token };
};
authFn();*/

const authFn = () => {
  return new Promise((resolve, reject) => {
    signIn('testing@gaeprojects.com', '123456').then((res) => {
      console.log('Response Data', res.data.data);
      resolve(res.data.data.token);
      //   reject(res.data);
      //   return res.data.data.token;
    });
  });
};
// authFn();

const newQuote = async () => {
  const { token } = await authFn();
  console.log('Token', token);
  const QuoteObj = JSON.parse(JSON.stringify(jsondata.data));
  console.log('QuoteObj@@@', QuoteObj);

  const res = await quoteAxios.post(
    'create',
    {
      data: QuoteObj,
    },

    { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
  );

  console.log('createQuote', res.data.data);
};

const createQuote = async () => {
  return new Promise((resolve, reject) => {
    authFn().then((res) => {
      console.log('ResData', res);
    });
  });
};
createQuote();
