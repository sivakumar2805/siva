const { ObjectId } = require('mongodb');
const mongoDB = require('../mongoDB');
const functions = require('./company.functions');
// const trim = require('./trim.funtions');
const new_company = async (req, res, next) => {
  const newObj = req.body.data;
  const data = await functions.new_company(newObj);
  res.status(200).json(data);
};

const getCompany_list = async (req, res, next) => {
  const { offset } = req.body.data;
  const { pagesize } = req.body.data;
  const listObj = { offset, pagesize };
  const data = await functions.getCompany_list(listObj);
  res.status(200).json(data);
};

const updateCompany = async (req, res, next) => {
  const { companyid } = req.body.data;
  const details = req.body.data;
  const updateObj = { companyid, details };
  const data = await functions.updateCompany(updateObj);
  res.status(200).json(data);
};

// const trimObject = async (req, res, next) => {
//   const data = req.body.data;
//   console.log('data', data);
//   let trimmed = JSON.stringify(data, (key, value) => {
//     console.log('key', key);
//     console.log('value', value);
//     if (typeof value === 'string') {
//       return value.trim();
//     }
//     return value;
//   });
//   res.send({ data: JSON.parse(trimmed) });
// };

const trimObject1 = async (req, res, next) => {
  const data = req.body.data;
  console.log('data', data);
  const items = JSON.parse(data, (key, value) => {
    const propertiesToCast = ['price'];
    console.log('propertiesToCast', propertiesToCast);
    if (propertiesToCast.includes(key)) {
      return parseFloat(value);
    }
    return value;
  });
  res.send({ data: JSON.parse(items) });
};

function trimString(data) {
  if (typeof data === 'string') {
    return data.trim();
  }
  return data;
}

function trimObject(data) {
  let trimmed = JSON.stringify(data, (key, value) => {
    console.log('key', key);
    console.log('value', value);
    if (typeof value === 'string') {
      return value.trim();
    }
    return value;
  });

  return trimmed;
}

// console.log(trimString('         siva'));
// console.log(
//   trimObject({ a: '       2222222222222222222', b: '      ttttttttttttttt' })
// );

const numericKeys = ['price', 'quantity', 'total'];
function parseNumeric({ key, value }) {
  console.log('key in parse fn', key);
  console.log('value in parse fn', value);
  if (numericKeys.includes(key)) {
    console.log('Key Exists');
  } else {
    console.log('Not exists');
  }
}
// parseNumeric({ key: 'price', value: '20' });

const methodChecking = async (req, res) => {
  const bodyObj = req;
  console.log('BodyObj', bodyObj);
  // const { offset } = req.params;
  res.status(200).json({
    data: {
      query: req.query,
      params: req.params,
      // offset,
    },
  });
};

module.exports = {
  new_company,
  getCompany_list,
  updateCompany,
  trimObject,
  methodChecking,
};
