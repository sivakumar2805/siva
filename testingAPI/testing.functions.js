// const mongoDB = require('../mongoDB');

// const IndexFn = async () => {
//   const db = await mongoDB();
//   //   const index = await db.collection('UOM').createIndex({ number: -1 });
//   const getIndex = await db.collection('UOM').getIndexes();
//   console.log('Index', getIndex);
// };

// IndexFn();

const mongoDB = require('../mongoDB.js');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const function_SignUp = async (req, res, next) => {
  const db = await mongoDB();
  const { email, password, name } = req.body.data;
  const hashpassword = await bcrypt.hash(password, 1);
  console.log('hashpassword', hashpassword);
  const emailCount = await db.collection('Testauth').countDocuments({ email });
  console.log('count', emailCount);
  if (emailCount > 0) {
    return res.status(200).json({ status: 400, data: 'User Already Exists' });
  }
  const data = await db
    .collection('Testauth')
    .insertOne({ email, password: hashpassword, name });
  console.log('Data', data);
  res.status(200).json({ status: 201, data: 'SignUp Finished' });
};

const function_SignIn = async (req, res, next) => {
  const db = await mongoDB();
  console.log('Request', req);
  const { uniqueID } = req;
  console.log('uniqueID', uniqueID);
  const { email, password } = req.body.data;
  const filter = {
    email,
  };
  const columns = {
    password: 1,
    name: 1,
    uniqueID: 1,
  };

  const data = await db
    .collection('Testauth')
    .findOne(filter, { projection: columns });
  console.log('data', data);

  const emailCount = await db.collection('Testauth').countDocuments({ email });
  if (!emailCount) {
    return res.status(200).json({ status: 400, data: 'User Not Exists' });
  }
  const passwordMatch = await bcrypt.compare(password, data.password);
  // console.log('PasswordMatch', passwordMatch);

  const caseChange = `${data.name[0].toUpperCase()}${data.name.slice(1)}`;

  if (!passwordMatch) {
    return res
      .status(200)
      .json({ status: 400, data: "Password Doesn't Match" });
  }
  res.status(200).json({ data: `Login SuccessFully,Welcome ${caseChange}` });
};

// uniqueID: 'dbdac356-b946-46df-a355-15d8cb1bf6cd',

// const function_ChangePassword = async (req, res, next) => {
//   const db = await mongoDB();
//   const { currentpassword, newpassword } = req.body.data;
//   const passwordMatch = await bcrypt.compare(currentpassword);
//   const filter = {
//     password: currentpassword,
//   };
//   const columns = {
//     password: 1,
//   };

//   const data = await db
//     .collection('Testauth')
//     .findOne(filter, { projection: columns });
//   console.log('data', data);

//   res.status(200).json({ data: 'Wait' });
// };

const aggregation = async (req, res, next) => {
  const db = await mongoDB();
  const pipeLine = [
    {
      $match: {
        quotesentid: '5f773223-2142-4475-864c-a051f8c69c23',
      },
    },
    {
      $project: {
        items: {
          $filter: {
            input: '$items',
            as: 'item',
            cond: { $gte: ['$$item.price', '23000'] },
          },
        },
      },
    },
  ];

  const [data] = await db.collection('UOM').aggregate(pipeLine).toArray();
  console.log('data', data);
  res.status(200).json({ status: 200, data });
};

module.exports = { function_SignUp, function_SignIn, aggregation };
