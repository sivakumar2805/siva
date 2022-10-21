const { authAxios, quoteAxios } = require('./auth');
const jsondata = require('./quote.json');

const createQuote = (email, password) => {
  let token;
  authAxios
    .post(
      'auth/signIn',
      { data: { email, password } },
      { headers: { Origin: '*' } }
    )
    .then((res) => {
      console.log('Response Data!!!', res.data.data.details);
      token = res.data.data.token;
      console.log('!!!!!!!!!!!!!!', token);
      const quoteObj = JSON.parse(JSON.stringify(jsondata.data));
      quoteAxios
        .post(
          'create',
          { data: quoteObj },
          {
            headers: { Origin: '*', Authorization: 'Bearer ' + token },
          }
        )
        .then((res) => {
          console.log('Quote Response', res.data.data);
        })
        .catch((err) => {
          console.log('Error From Quote', err.response.data);
        });
    })
    .catch((err) => {
      console.log('Error From SignIn', err.response.data);
    });
};

createQuote('testing@gaeprojects.com', '12345');
