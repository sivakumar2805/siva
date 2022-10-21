const { ObjectId } = require('mongodb');
const getmongoDB = require('../mongoDB');

//This Function Using For Deleting More Documnets
const deleteQuoteSent = async () => {
  const entmasterid = '61cb15d59dc11c4d6bc0f321';
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('QuoteSent')
    .find({ entmasterid }, { _id: 1 })
    .limit(10)
    .sort({ timestamp: -1 })
    .toArray();

  const idArray = data.map(function (doc) {
    return doc._id;
  });
  await mongoDB.collection('QuoteSent').deleteMany({ _id: { $in: idArray } });
  console.log(idArray);
};

// deleteQuoteSent();

// This Function Using For Remove The Field From Document
const removeField = async () => {
  const id = '61cdb2c04760112ec64b3cae';
  const mongoDB = await getmongoDB();
  const filter = {
    _id: ObjectId(id),
  };
  const data = await mongoDB
    .collection('Login')
    .updateMany({}, { $unset: { permissions: {}, userpermissions: [] } });
  console.log('data', data);
};

// removeField();

const addingField = async () => {
  const mongoDB = await getmongoDB();
  const id = '626d30245a3cd3f8e9b83422';
  const filter = {
    _id: ObjectId(id),
    // 'array.name': 'kumar',
  };

  const update = {
    $set: {
      array: [
        {
          name: 'abcd',
          email: 'siva@gmail.com',
          age: 21,
          city: 'bangalore',
        },
        {
          name: 'abcd',
          email: 'siva@gmail.com',
          age: 21,
          city: 'bangalore',
        },
      ],
    },
  };
  const data = await mongoDB
    .collection('siva')
    .findOneAndUpdate(filter, update, { upsert: true });

  console.log('data', data);
};

// addingField();

const usingLet = async () => {
  const mongoDB = await getmongoDB();
  const id = '626d30245a3cd3f8e9b83422';
  const filter = {
    _id: ObjectId(id),
  };

  // const update = {
  //   $set: {
  //     price: 10,
  //     tax: 0.5,
  //     applyDiscount: true,
  //   },
  // };
  const data = await mongoDB.collection('siva').aggregate([
    {
      $project: {
        finalTotal: {
          $let: {
            vars: {
              total: { $add: ['$price', '$tax'] },
              discounted: {
                $cond: { if: '$applyDiscount', then: 0.9, else: 1 },
              },
            },
            in: { $multiply: ['$$total', '$$discounted'] },
          },
        },
      },
    },
  ]);

  console.log('data', data);
};

// usingLet();
