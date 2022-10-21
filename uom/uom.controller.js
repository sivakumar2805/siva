const mongoDB = require('../mongoDB');
const uuid = require('uuid');
const res = require('express/lib/response');

const new_uom = async (req, res, next) => {
  const uom = req.body.data;
  console.log('uom', uom);
  const db = await mongoDB();
  const uomObj = { ...uom, createdat: new Date(), isactive: true };
  console.log('obj', uomObj);
  const data = await db.collection('check').insertOne(uomObj);

  // [...Array(5000)].map((e) => {
  //   const uom = uuid.v1();
  //   db.collection('UOM')
  //     .insertOne({
  //       uomname: uom,
  //       number: Math.floor(Math.random() * 5000),
  //       description: new Date() + 'creating index',
  //     })
  //     .then((e) => {
  //       console.log('E', e);
  //     });
  // });

  res.status(200).json({ status: 201, data: data.insertedId });
};

//Search:

const searchFn = async (req, res, next) => {
  const db = await mongoDB();
  // const searchValue = req.body.data;
  const data = await db
    .collection('check')
    .find({ name: { $regex: 'kumar', $options: 'i' } })
    .toArray();
  // const pipeLine = [
  //   {
  //     $match: {
  //       $text: {
  //         $search: 'siva',
  //       },
  //     },
  //   },
  // ];
  // const data = await db.collection('check').aggregate(pipeLine).toArray();
  // console.log('data', data);
  // const data = await db.collection('check').createIndex({ name: 'text' });
  // console.log('data', data);
  res.status(200).json({ status: 201, data });
};

const get_uom = async (req, res, next) => {
  const { offset } = req.body.data;
  const { pagesize, sort } = req.body.data;
  const db = await mongoDB();
  const { field, orderby } = sort;
  const columns = {
    _id: 0,
    uomnameid: '$_id',
    uomname: 1,
    isactive: 1,
  };
  console.log('field', field);
  console.log('orderby', orderby);

  const data = await db
    .collection('User_UOM')
    .find({}, { projection: columns })
    .sort({
      [field.toLowerCase()]: orderby === 'desc' ? -1 : 'asc' ? 1 : -1,
    })
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();

  // const totalcount = await db.collection('User_UOM').countDocuments();

  res.status(200).json({
    status: 200,
    data,
    offset: offset || 0,
    pagesize: pagesize || 5,
  });
};

const savePermission = async (req, res, next) => {
  const db = await mongoDB();
  const permissions = req.body.data;
  console.log('Permission Obj', permissions);
  const data = await db.collection('Siva_Permission').insertOne(permissions);
  res.status(200).json({ status: 201, data: data.insertedId });
};

const addPermission = async (req, res, next) => {
  const db = await mongoDB();
  const { permissions, userid, admin } = req.body.data;
  const filter = {
    userid,
  };
  const update = {
    $set: {
      permissions: permissions,
      admin,
    },
  };
  console.log('update', update);
  const count = await db.collection('Siva_Permission').countDocuments(filter);
  console.log('count', count);

  res.status(200).json({ status: 201 });
};

// const user_Middleware = (module) => async (req, res, next) => {
//   const db = await mongoDB();
//   const { admin, userid } = req.body.data;

//   if (!admin) {
//     const filter = {
//       userid,
//       'permissions.permission': module,
//     };
//     console.log('filter', filter);
//     const count = await db.collection('Siva_Permission').countDocuments(filter);
//     console.log('Count', count);

//     if (!count) {
//       return res.status(200).json({
//         status: 403,
//         data: 'Permission Denied',
//       });
//     }
//   }
//   return next();
// };

// const user_Middleware = (module) => async (req, res, next) => {
//   const db = await mongoDB();
//   const { admin, userid } = req.body.data;
//   try {
//     if (!admin) {
//       const agg = [
//         {
//           $match: {
//             userid,
//             'permissions.permission': module,
//           },
//         },
//         { $group: { _id: null, Count: { $sum: 1 } } },
//         { $project: { _id: 0, Count: 1 } },
//       ];
//       const [data] = await db
//         .collection('Siva_Permission')
//         .aggregate(agg)
//         .toArray();
//       console.log('data@@@', data);

//       if (!data.count) {
//         return res.status(200).json({
//           status: 403,
//           data: 'Permission Denied',
//         });
//       }
//     }

//     return next();
//   } catch (err) {
//     console.log('Error', err);
//   }
// };

const user_Middleware = (module) => async (req, res, next) => {
  const db = await mongoDB();
  const { admin, userid } = req.body.data;

  if (!admin) {
    console.log('Not admin', !admin);
  }
  res.status(200).json({ data: 'AA' });
};

const function_Add = async (req, res, next) => {
  const add = req.body.data;
  console.log('add', add);
  res.status(200).json({ status: 201, data: add });
};

const updateFn = async (req, res, next) => {
  const db = await mongoDB();
  const uomid = uuid.v4();
  const find = await db
    .collection('UOM')
    .find({}, {})
    .forEach((e) => {
      e['uomid'] = uomid;
      console.log('Element', e);
    });
  console.log('find', find);
  res.status(200).json({ status: 201, data: find });
};

module.exports = {
  new_uom,
  get_uom,
  savePermission,
  addPermission,
  user_Middleware,
  function_Add,
  updateFn,
  searchFn,
};
