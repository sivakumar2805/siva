const express = require('express');
const mongoDB = require('./mongoDB');

const createPrefix = async () => {
  const db = await mongoDB();
  //   const prefix = req.body.data;
  const prefixObj = { count: 0, prefix: 'RFQ/' };
  const data = await db.collection('Prefix').insertOne(prefixObj);
  console.log('data', data);
  //   res.status(200).json({ status: 201, data });
};

// const updatePrefix = async () => {
//   const db = await mongoDB();

//   const filter = {
//     count: 0,
//   };

//   //   const update = {
//   //     $set: {
//   //       prefix: this.RFQ / 1,
//   //     },
//   //   };
//   //   const data = await db.collection('Prefix').updateOne(filter, update);
//   //   console.log('data', data);
//   try {
//     const updateObj = [
//       {
//         $cond: {
//           if: {
//             $eq: { count: 0 },
//           },
//           then: {
//             $inc: {
//               count: 1,
//             },
//             $set: {
//               prefix: `RFQ/${this.count}`,
//             },
//           },
//           else: {},
//         },
//       },
//     ];

//     const obj = { ...updateObj };
//     // console.log('updateObj', updateObj);
//     const data = await db
//       .collection('Prefix')
//       .updateOne(filter, obj, { upsert: true });
//     console.log('data', data);
//     // console.log('data', data);
//   } catch (err) {
//     console.log('error', err);
//   }
// };
// createPrefix();

const updatePrefix = async () => {
  let prefix;
  const db = await mongoDB();
  const data = await db
    .collection('Prefix')
    .findOneAndUpdate(
      { prefix: 'RFQ/' },
      { $inc: { count: 1 } },
      { upsert: true, new: true },
      { returnOriginal: true }
    );

  prefix = data.value?.count ? data.value.count + 1 : 1;
  const value = data.value.prefix;
  const total = value + data.value.count;
  console.log('store', total);
  console.log('data', data);
  return total;
};

// updatePrefix();
// let varName = 'afshin';
// switch (varName) {
//   case ['afshin', 'saeed', 'larry'].find((firstName) => firstName === varName):
//     console.log('Hey');
//     break;

//   default:
//     console.log('Default case');
//     break;
// }
