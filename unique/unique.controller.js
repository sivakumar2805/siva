const getmongoDB = require('../mongoDB');

const createUnique = async (req, res, next) => {
  const mongoDB = await getmongoDB();
  const reqData = req.body.data;
  console.log('Reqdata', reqData);
  const data = await mongoDB
    .collection('unique')
    .insertOne({ ...reqData, createdat: new Date() });
  console.log('data', data);
  res.status(200).json({ status: 201, data: data.insertedId });
};

const getUniqueWorksapce = async (req, res, next) => {
  const mongoDB = await getmongoDB();
  const { key3 } = req.body.data;
  console.log('key3', key3);

  const filter = {
    'arrayOfObjects.key3': key3,
  };

  const data = await mongoDB
    .collection('unique')
    .aggregate([
      {
        $match: filter,
      },
      { $project: { b: '$arrayOfObjects.key4' } },
      { $unwind: '$b' },
      { $unwind: '$b' },
      {
        $group: {
          _id: 'b',
          workspaceid: { $addToSet: '$b' },
        },
      },
      {
        $project: {
          _id: 0,
          workspaceid: 1,
        },
      },
    ])
    .toArray();
  console.log('data', data);

  const count = await mongoDB.collection('unique').countDocuments(filter);
  console.log('count', count);

  if (!count) {
    return res.status(200).json({
      status: 400,
      data: 'Invalid',
    });
  } else {
    return res.status(200).json({ status: 200, data: data[0] });
  }
  // res.status(200).json({ status: 200 });
};

const latestDocs = async (req, res, next) => {
  const { entmasterid } = req;
  const mongoDB = await getmongoDB();
  // const aggregation = [
  //   // {
  //   //   $match: { entmasterid },
  //   // },
  //   // {
  //   //   $limit: 2,
  //   // },
  //   // {
  //   //   $lookup: {
  //   //     from: 'Login',
  //   //     localField: 'entmasterid',
  //   //     foreignField: 'entmasterid',
  //   //     as: 'Login Data',
  //   //   },
  //   // },
  //   // {
  //   //   $limit: 2,
  //   // },
  //   // {
  //   //   $lookup: {
  //   //     from: 'RFQSent',
  //   //     localField: 'QuoteSent.entmasterid',
  //   //     foreignField: 'entmasterid',
  //   //     as: 'RFQSent Data',
  //   //   },
  //   // },

  //   // {
  //   //   $sort: {
  //   //     createdat: -1,
  //   //   },
  //   // },

  //   {
  //     $match: { entmasterid },
  //   },
  //   {
  //     $lookup: {
  //       from: 'RFQSent',
  //       localField: 'entmasterid',
  //       foreignField: 'entmasterid',
  //       as: 'RFQSent Data',
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: 'QuoteSent',
  //       localField: 'entmasterid',
  //       foreignField: 'entmasterid',
  //       as: 'QuoteSent Data',
  //     },
  //   },
  //   {
  //     $project: {
  //       'QuoteSent Data': 1,
  //       'RFQSent Data': 1,
  //     },
  //   },
  //   {
  //     $sort: {
  //       createdat: -1,
  //     },
  //   },
  //   {
  //     $limit: 1,
  //   },
  //   {
  //     $project: {
  //       concatResults: { $concatArrays: ['$QuoteSent Data', '$RFQSent Data'] },
  //     },
  //   },

  //   // {
  //   //   concatResults: { $concatArrays: ['$RFQSent Data', '$QuoteSent Data'] },
  //   // },
  // ];

  const agg = [
    {
      $match: {
        entmasterid,
      },
    },
    {
      $lookup: {
        from: 'RFQSent',
        localField: 'entmasterid',
        foreignField: 'entmasterid',
        as: 'RFQSent Data',
      },
    },
    {
      $unwind: {
        path: '$RFQSent Data',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: 'QuoteSent',
        localField: 'entmasterid',
        foreignField: 'entmasterid',
        as: 'QuoteSent Data',
      },
    },
    {
      $unwind: {
        path: '$QuoteSent Data',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        'QuoteSent Data': 1,
        'RFQSent Data': 1,
      },
    },
    {
      $sort: {
        'RFQSent Data.createdat': -1,
        'QuoteSent Data.createdat': -1,
      },
    },
    {
      $project: {
        Objects: ['$RFQSent Data', '$QuoteSent Data'],
      },
    },
    {
      $limit: 5,
    },
  ];
  const data = await mongoDB.collection('QuoteSent').aggregate(agg).toArray();

  res.status(200).json({ status: 201, data });
};

///

const usingLet = async (req, res, next) => {
  const mongoDB = await getmongoDB();
  const id = '626d30245a3cd3f8e9b83422';
  const data = await mongoDB
    .collection('siva')
    .aggregate([
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
    ])
    .toArray();

  console.log('data', data);
  res.status(200).json({ status: 200, data });
};

const uomPermission = async (req, res, next) => {
  const mongoDB = await getmongoDB();
  const { userid, permissionmodules } = req.body.data;
  // const { permission } = permissionmodules;

  let permit;
  if ((permit = permissionmodules.permission === 'UOM:CREATE')) {
    console.log('true');
  } else {
    false;
  }
  res.status(200).json({ status: 200, data: 'AAAAAA' });
};

const createFn = async (req, res, next) => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB.collection('Student').insertMany([
    { name: 'abdul', language: 'all' },
    { name: 'bhuvanesh', language: 'british' },
    { name: 'chandru', language: 'c++' },
    { name: 'diwakar', language: 'docker' },
  ]);
  console.log('data', data);
  // res.status(200).json({ status: 201, data });
};
// createFn();
const createIndexFn = async (req, res, next) => {
  const mongoDB = await getmongoDB();

  const data = await mongoDB
    .collection('Account')
    .createIndex({ name: 'text' });

  console.log('data', data);
};
// createIndexFn();

const searchIndexFn = async (req, res, next) => {
  const { position, type = 'partial' } = req.body.data;
  const mongoDB = await getmongoDB();
  const searchOptions =
    type === 'partial'
      ? { name: { $regex: `${position}`, $options: 'i' } }
      : type === 'exact'
      ? { $text: { $search: position, $caseSensitive: false } }
      : null;
  const filter = {
    entmasterid,
    ...searchOptions,
  };

  const columns = {
    name: 1,
  };
  const data = await mongoDB
    .collection('Account')
    .find(filter, { projection: columns })
    .toArray();

  console.log('data', data);

  res.status(200).json({ status: 200, data });
};

const insertFn = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB.collection('Student').insertMany([
    {
      title: 'MongoDB Overview',
      description: 'MongoDB is no sql database',
      by_user: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100,
    },
    {
      title: 'NoSQL Overview',
      description: 'No sql database is very fast',
      by_user: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 10,
    },
    {
      title: 'sandy Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'narendar Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'mohan Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'praveen Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'kamal Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'kumar Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
    {
      title: 'siva Overview',
      description: 'Neo4j is no sql database',
      by_user: 'Neo4j',
      url: 'http://www.neo4j.com',
      tags: ['neo4j', 'database', 'NoSQL'],
      likes: 750,
    },
  ]);
  console.log('data', data);
};
// insertFn();

const aggregation = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('Student')
    .aggregate([{ $group: { _id: '$title', num_tutorial: { $sum: 1 } } }])
    .toArray();
  console.log('data', data);
};

// aggregation();

module.exports = {
  createUnique,
  getUniqueWorksapce,
  latestDocs,
  usingLet,
  uomPermission,
  searchIndexFn,
};
