const { ObjectId } = require('bson');
const Api404Error = require('../Error/apiError');
const mongoDB = require('../mongoDB');
const functions = require('./self.Functions');

const newSelfProfile = async (req, res, next) => {
  const details = req.body.data;
  const newProfile = { ...details, createdat: new Date() };
  const db = await mongoDB();
  const data = await db.collection('SelfProfile').insertOne(newProfile);
  console.log('data', data);
  res.status(200).json({ status: 201, data: data.insertedId });
};
const getSelfProfile = async (req, res, next) => {
  //   const details = req.body.data;
  const db = await mongoDB();

  const columns = {
    profileid: '$_id',
    _id: 0,
    company: 1,
    contactname: 1,
    address: 1,
    city: 1,
    state: 1,
    pincode: 1,
    taxid: 1,
    country: 1,
    emails: 1,
    phonenumbers: 1,
  };

  const data = await db
    .collection('SelfProfile')
    .find({}, { projection: columns })
    .sort({ createdat: -1 })
    .toArray();
  console.log('data', data);

  res.status(200).json({
    status: 200,
    data,
  });
};

// const getSelfProfileByid = async (req, res, next) => {
//   const { profileid } = req.body.data;
//   const db = await mongoDB();
//   const filter = {
//     _id: ObjectId(profileid),
//   };
//   const columns = {
//     _id: 0,
//     profileid: '$_id',
//     company: 1,
//     contactname: 1,
//     address: 1,
//     city: 1,
//     state: 1,
//     pincode: 1,
//     taxid: 1,
//     country: 1,
//     emails: 1,
//     phonenumbers: 1,
//   };
//   const data = await db
//     .collection('SelfProfile')
//     .findOne(filter, { projection: columns });
//   res.status(200).json({ status: 200, data });
// };

const updateSelfProfile = async (req, res, next) => {
  const selfprofile = req.body.data;
  const { profileid } = selfprofile;
  console.log('profileId', profileid);
  console.log('selfProfile', selfprofile);
  const db = await mongoDB();
  const filter = {
    _id: ObjectId(profileid),
  };
  console.log('profile', selfprofile);
  delete selfprofile.profileid;
  console.log('After profile', selfprofile);

  const update = {
    $set: {
      ...selfprofile,
      updatedat: new Date(),
    },
  };

  const data = await db.collection('SelfProfile').updateOne(filter, update);
  res.status(200).json({ status: 201 });
};

const deleteSelfProfile = async (req, res, next) => {
  const { profileid } = req.body.data;
  try {
    console.log('1');
    if (profileid === null) {
      console.log('2');
      return next(new Api404Error('SelfID is null', 400));
    }

    const db = await mongoDB();
    const filter = {
      _id: ObjectId(profileid),
    };
    const data = await db.collection('SelfProfile').deleteOne(filter);
    res.status(200).json({ status: 201 });
  } catch (err) {
    console.log('Error', err);
  }
};

const paginationWithAgg = async (req, res, next) => {
  const { offset } = req.body.data;
  const { pagesize } = req.body.data;

  const db = await mongoDB();

  const columns = {
    profileid: '$_id',
    _id: 0,
    company: 1,
    contactname: 1,
    address: 1,
    city: 1,
    state: 1,
    pincode: 1,
    taxid: 1,
    country: 1,
    emails: 1,
    phonenumbers: 1,
  };
  const aggPipe = [
    {
      $project: columns,
    },
    {
      $sort: {
        createdat: -1,
      },
    },
    { $skip: offset ? offset : 0 },
    {
      $limit: pagesize > 0 ? pagesize : 5,
    },
  ];

  const data = await db.collection('SelfProfile').aggregate(aggPipe).toArray();
  console.log('data', data);
  res.status(200).json({ status: 200, data, offset, pagesize });
};

const serachOption = async (req, res, next) => {
  const db = await mongoDB();
  const { position } = req.body.data;
  const columns = {
    id: '$_id',
    _id: 0,
    // company: 1,
    // address: 1,
    contactname: 1,
  };
  const searchOptions = {
    $regex: `${position}`,
    $options: 'i',
  };

  const whereClause = {
    $or: [
      {
        contactname: searchOptions,
      },
      {
        company: searchOptions,
      },
    ],
  };

  const data = await db
    .collection('SelfProfile')
    .find(whereClause, { projection: columns })
    .toArray();
  console.log('data', data);
  const count = await db.collection('SelfProfile').countDocuments(whereClause);
  console.log('data', count);
  res.status(200).json({ status: 200, data });
};

// const fn1 = (req, res, c) => {
//   const data = req.body.data;
//   console.log('data', data);
//   res.status(200).json({ status: 200, data: data });
// };
const fn1 = (a, b, c) => {
  const data = a.body.data;
  console.log('data', data);
  b.status(200).json({ status: 200, data });
};

module.exports = {
  newSelfProfile,
  getSelfProfile,
  //   getSelfProfileByid,
  updateSelfProfile,
  deleteSelfProfile,
  paginationWithAgg,
  serachOption,
  fn1,
};
