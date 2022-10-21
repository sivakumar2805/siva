const getmongoDB = require('./mongoDB');
const axios = require('axios');
const ax = axios.create({
  baseURL: 'http://192.168.0.152:5001/api/v1/auth/',
});
const Delete_AllUsers = async () => {
  const mongoDB = await getmongoDB();
  console.log('1');
  const data = await mongoDB
    .collection('Login')
    .find(
      { hassignedup: true, isactive: true, isadmin: true },
      {
        projection: {
          email: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    // .limit(1)
    .forEach((element) => {
      console.log('Element', element);
      ax.post(`signin`, {
        data: { email: element.email, password: '123456' },
      })
        .then((res) => {
          console.log('Response fron signin', res.data.data);
          const { token } = res.data.data || {};
          console.log('Token', token);
          ax.post(
            `deleteuseraccount`,
            {},
            {
              headers: { Origin: '*', Authorization: 'Bearer ' + token },
            }
          )
            .then((res) => {
              console.log(
                'Response from DeleteUser' + Math.floor(Math.random() * 50),
                res.data.data
              );
            })
            .catch((err) => {
              console.log('Error From DeleteUser', err);
            });
        })
        .catch((err) => {
          console.log('Error From Signin', err);
        });
    });
  console.log('Data', data);
};

module.exports = {
  Delete_AllUsers,
};
