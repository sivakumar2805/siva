const axios = require('axios');

const authAxios = axios.create({
  baseURL: 'http://192.168.0.152:5001/api/v1/',
});

const quoteAxios = axios.create({
  baseURL: 'http://192.168.0.152:5004/api/v1/quote',
});

const signIn = async (email, password) => {
  const res = await authAxios.post(
    'auth/signIn',
    {
      data: { email, password },
    },
    { headers: { Origin: '*' } }
  );
  return res;
};

module.exports = { signIn, quoteAxios, authAxios };
