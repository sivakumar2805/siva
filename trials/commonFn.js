const axios = require('axios');
const ax = axios.create({
  baseURL: 'http://192.168.0.152:5002/api/v1/',
});

let token = '5d3513c2-26cc-400b-ada2-ad20646c9526';

const itemList = async () => {
  const data = await ax
    .post(
      `item/list`,
      {
        data: {
          offset: 0,
          pagesize: 5,
          itemgroupid: '-1',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    )
    .then((res) => {
      console.log('Response', res.data);
    })
    .catch((err) => {
      console.log('Error', err);
    });
  console.log('Response data', data);
};

// itemList();
