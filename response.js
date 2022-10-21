const data = {
  data: {
    token: 'd4c61eee-a65f-4a94-95b8-e602bf6b5862',
    email: 'testing@gaeprojects.com',
    isent: true,
    isadmin: true,
    fullname: 'Testing',
    countrycode: 'IN',
    currencycode: 'INR',
    countryname: 'India',
    locale: 'en',
    timezone: 'Asia/Kolkata',
    setuppending: false,
    minimumfractiondigit: '3',
    maximumfractiondigit: '3',
    module_enabled: { rfq: true, quote: true, orders: true, bills: false },
    company: 'testing',
    phonenumber: '7855454243',
  },
  status: 200,
};

const axios = require('axios');

const authAxios = axios.create({
  baseURL: 'http://192.168.0.151:5001/api/v1/',
});

const signIn = async (email, password) => {
  const res = await authAxios.post(
    'auth/signin',
    {
      data: { email: 'sivakumar.h@gaeprojects.com', password: '123456' },
    },
    { headers: { Origin: '*' } }
  );
  // console.log('Response', res.data.data);
  return res.data.data;
};

const fn = async () => {
  const { email, token } = await signIn();
  // console.log('email', email);
  return email, token;
};
// fn();

const fn2 = async () => {
  const { token } = await fn();
  console.log('token', token);
};
