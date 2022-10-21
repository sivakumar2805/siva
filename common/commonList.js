// const getmongoDB = require('../mongoDB');
// const bytes = require('bytes');
// const getCommonList = async (req, res, next) => {
//   //   const { entmasterid } = req;
//   //   const { workspaceid } = req.body.data;
//   const mongoDB = await getmongoDB();

//   const filter = {
//     entmasterid: '6284e4843f14af29bb4ff88a',
//     workspaceid: 10,
//   };
//   //   const aggregation = [
//   //     {
//   //       $match: filter,
//   //     },
//   //     {
//   //       $skip: 0,
//   //     },
//   //     {
//   //       $limit: 1,
//   //     },
//   //     {
//   //       $lookup: {
//   //         from: 'QuoteInbox',
//   //         localField: 'entmasterid',
//   //         foreignField: 'entmasterid',
//   //         as: 'QuoteInboxData',
//   //       },
//   //     },
//   //     {
//   //       $lookup: {
//   //         from: 'QuoteSent',
//   //         localField: 'entmasterid',
//   //         foreignField: 'entmasterid',
//   //         as: 'QuoteSentData',
//   //       },
//   //     },
//   //     {
//   //       $project: {
//   //         QuoteSentData: 1,
//   //         QuoteInboxData: 1,
//   //       },
//   //     },
//   //     {
//   //       $sort: {
//   //         createdat: -1,
//   //       },
//   //     },
//   //     // {
//   //     //   $skip: 3,
//   //     // },
//   //     // {
//   //     //   $limit: 1,
//   //     // },
//   //     {
//   //       $unwind: {
//   //         path: '$QuoteInboxData',
//   //         preserveNullAndEmptyArrays: true,
//   //       },
//   //     },
//   //     {
//   //       $unwind: {
//   //         path: '$QuoteSentData',
//   //         preserveNullAndEmptyArrays: true,
//   //       },
//   //     },
//   //     {
//   //       $project: {
//   //         'QuoteSentData.title': 1,
//   //         'QuoteInbox.title': 1,
//   //       },
//   //     },
//   //   ];

//   const aggregation = [
//     {
//       $match: {
//         entmasterid: '6284e4843f14af29bb4ff88a',
//       },
//     },
//     {
//       $unionWith: {
//         coll: 'QuoteSent',
//         pipeline: [
//           {
//             $project: {
//               entmasterid: 1,
//               workspaceid: 1,
//               workspacename: 1,
//               quotesentid: 1,
//             },
//           },
//         ],
//       },
//     },
//     {
//       $unionWith: {
//         coll: 'QuoteInbox',
//         pipeline: [
//           {
//             $project: {
//               entmasterid: 1,
//               workspaceid: 1,
//               workspacename: 1,
//               quoteinboxid: 1,
//             },
//           },
//         ],
//       },
//     },
//     {
//       $sort: {
//         createdat: -1,
//       },
//     },
//     {
//       $limit: 5,
//     },
//     {
//       $set: {
//         id: {
//           $cond: ['$quotesentid', '$quotesentid', '$quoteinboxid'],
//         },
//         type: {
//           $cond: ['$quotesentid', 'QS', 'QI'],
//         },
//       },
//     },
//     {
//       $match: {
//         entmasterid: '6284e4843f14af29bb4ff88a',
//         workspaceid: 10,
//       },
//     },
//   ];
//   const data = await mongoDB
//     .collection('User_WorkSpace')
//     .aggregate(aggregation)
//     .toArray();

//   console.log('data', data);

//   //   const totalCount = await mongoDB
//   //     .collection('QuoteSent')
//   //     .countDocuments(filter);
//   //   console.log('totalCount', totalCount);
//   res.status(200).json({ status: 200, data });
// };
// module.exports = { getCommonList };

// const getmongoDB = require('../mongoDB');

// const createUnique = async (req, res, next) => {
//   const mongoDB = await getmongoDB();
//   const reqData = req.body.data;
//   console.log('Reqdata', reqData);
//   const data = await mongoDB
//     .collection('unique')
//     .insertOne({ ...reqData, createdat: new Date() });
//   console.log('data', data);
//   res.status(200).json({ status: 201, data: data.insertedId });
// };

// const getUniqueWorksapce = async (req, res, next) => {
//   const mongoDB = await getmongoDB();
//   const { key3 } = req.body.data;
//   console.log('key3', key3);

//   const filter = {
//     'arrayOfObjects.key3': key3,
//   };

//   const data = await mongoDB
//     .collection('unique')
//     .aggregate([
//       {
//         $match: filter,
//       },
//       { $project: { b: '$arrayOfObjects.key4' } },
//       { $unwind: '$b' },
//       { $unwind: '$b' },
//       {
//         $group: {
//           _id: 'b',
//           workspaceid: { $addToSet: '$b' },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           workspaceid: 1,
//         },
//       },
//     ])
//     .toArray();
//   console.log('data', data);

//   const count = await mongoDB.collection('unique').countDocuments(filter);
//   console.log('count', count);

//   if (!count) {
//     return res.status(200).json({
//       status: 400,
//       data: 'Invalid',
//     });
//   } else {
//     return res.status(200).json({ status: 200, data: data[0] });
//   }
//   // res.status(200).json({ status: 200 });
// };

// const latestDocs = async (req, res, next) => {
//   const { entmasterid } = req;
//   const mongoDB = await getmongoDB();
//   // const aggregation = [
//   //   // {
//   //   //   $match: { entmasterid },
//   //   // },
//   //   // {
//   //   //   $limit: 2,
//   //   // },
//   //   // {
//   //   //   $lookup: {
//   //   //     from: 'Login',
//   //   //     localField: 'entmasterid',
//   //   //     foreignField: 'entmasterid',
//   //   //     as: 'Login Data',
//   //   //   },
//   //   // },
//   //   // {
//   //   //   $limit: 2,
//   //   // },
//   //   // {
//   //   //   $lookup: {
//   //   //     from: 'RFQSent',
//   //   //     localField: 'QuoteSent.entmasterid',
//   //   //     foreignField: 'entmasterid',
//   //   //     as: 'RFQSent Data',
//   //   //   },
//   //   // },

//   //   // {
//   //   //   $sort: {
//   //   //     createdat: -1,
//   //   //   },
//   //   // },

//   //   {
//   //     $match: { entmasterid },
//   //   },
//   //   {
//   //     $lookup: {
//   //       from: 'RFQSent',
//   //       localField: 'entmasterid',
//   //       foreignField: 'entmasterid',
//   //       as: 'RFQSent Data',
//   //     },
//   //   },
//   //   {
//   //     $lookup: {
//   //       from: 'QuoteSent',
//   //       localField: 'entmasterid',
//   //       foreignField: 'entmasterid',
//   //       as: 'QuoteSent Data',
//   //     },
//   //   },
//   //   {
//   //     $project: {
//   //       'QuoteSent Data': 1,
//   //       'RFQSent Data': 1,
//   //     },
//   //   },
//   //   {
//   //     $sort: {
//   //       createdat: -1,
//   //     },
//   //   },
//   //   {
//   //     $limit: 1,
//   //   },
//   //   {
//   //     $project: {
//   //       concatResults: { $concatArrays: ['$QuoteSent Data', '$RFQSent Data'] },
//   //     },
//   //   },

//   //   // {
//   //   //   concatResults: { $concatArrays: ['$RFQSent Data', '$QuoteSent Data'] },
//   //   // },
//   // ];

//   const agg = [
//     {
//       $match: {
//         entmasterid,
//       },
//     },
//     {
//       $lookup: {
//         from: 'RFQSent',
//         localField: 'entmasterid',
//         foreignField: 'entmasterid',
//         as: 'RFQSent Data',
//       },
//     },
//     {
//       $unwind: {
//         path: '$RFQSent Data',
//         preserveNullAndEmptyArrays: true,
//       },
//     },
//     {
//       $lookup: {
//         from: 'QuoteSent',
//         localField: 'entmasterid',
//         foreignField: 'entmasterid',
//         as: 'QuoteSent Data',
//       },
//     },
//     {
//       $unwind: {
//         path: '$QuoteSent Data',
//         preserveNullAndEmptyArrays: true,
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         'QuoteSent Data': 1,
//         'RFQSent Data': 1,
//       },
//     },
//     {
//       $sort: {
//         'RFQSent Data.createdat': -1,
//         'QuoteSent Data.createdat': -1,
//       },
//     },
//     {
//       $project: {
//         Objects: ['$RFQSent Data', '$QuoteSent Data'],
//       },
//     },
//     {
//       $limit: 5,
//     },
//   ];
//   const data = await mongoDB.collection('QuoteSent').aggregate(agg).toArray();

//   res.status(200).json({ status: 201, data });
// };

// ///

// const usingLet = async (req, res, next) => {
//   const mongoDB = await getmongoDB();
//   const id = '626d30245a3cd3f8e9b83422';
//   const data = await mongoDB
//     .collection('siva')
//     .aggregate([
//       {
//         $project: {
//           finalTotal: {
//             $let: {
//               vars: {
//                 total: { $add: ['$price', '$tax'] },
//                 discounted: {
//                   $cond: { if: '$applyDiscount', then: 0.9, else: 1 },
//                 },
//               },
//               in: { $multiply: ['$$total', '$$discounted'] },
//             },
//           },
//         },
//       },
//     ])
//     .toArray();

//   console.log('data', data);
//   res.status(200).json({ status: 200, data });
// };

// const uomPermission = async (req, res, next) => {
//   const mongoDB = await getmongoDB();
//   const { userid, permissionmodules } = req.body.data;
//   // const { permission } = permissionmodules;

//   let permit;
//   if ((permit = permissionmodules.permission === 'UOM:CREATE')) {
//     console.log('true');
//   } else {
//     false;
//   }
//   res.status(200).json({ status: 200, data: 'AAAAAA' });
// };

// const createFn = async (req, res, next) => {
//   const mongoDB = await getmongoDB();
//   const data = await mongoDB.collection('Student').insertMany([
//     { name: 'abdul', language: 'all' },
//     { name: 'bhuvanesh', language: 'british' },
//     { name: 'chandru', language: 'c++' },
//     { name: 'diwakar', language: 'docker' },
//   ]);
//   console.log('data', data);
//   // res.status(200).json({ status: 201, data });
// };
// // createFn();
// const createIndexFn = async (req, res, next) => {
//   const mongoDB = await getmongoDB();

//   const data = await mongoDB
//     .collection('Account')
//     .createIndex({ name: 'text' });

//   console.log('data', data);
// };
// // createIndexFn();

// const searchIndexFn = async (req, res, next) => {
//   try {
//     const mongoDB = await getmongoDB();
//     const filter = {};
//     const data = await mongoDB
//       .collection('Account')
//       .find({ $text: { $search: 'siva' } });

//     // console.log('data', data);
//   } catch (err) {
//     console.log('Error', err);
//   }
// };

// searchIndexFn();
// module.exports = {
//   createUnique,
//   getUniqueWorksapce,
//   latestDocs,
//   usingLet,
//   uomPermission,
// };

// const a = (param) => {
//   // return `From a ${param}`;
// };

// const b = (para) => {
//   const data = a(para);
//   return data;
// };

// console.log(a('siva'));
