const { ObjectId } = require('mongodb');
const mongoDB = require('./mongoDB');

const insertArray = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const details = req.body.data;
  const data = await getmongoDB.collection('testing').insertOne(details);
  res.status(201).json({ status: 201, data: data.insertedId });
};

const getStudentsList = async (req, res, next) => {
  const { offset } = req.body.data || 0;
  const { pagesize } = req.body.data || 5;
  const listObj = { offset, pagesize };
  const data = await studentsFn(listObj);
  res.status(200).json(data);
};

const getStudentById = async (req, res, next) => {
  const { id } = req.body.data;
  const getmongoDB = await mongoDB();
  const filter = {
    _id: ObjectId(id),
  };

  const columns = {
    name: 1,
    age: 1,
    email: 1,
    details: 1,
    address: 1,
  };
  const data = await getmongoDB
    .collection('testing')
    .findOne(filter, { projection: columns });
  console.log('data', data);
  res.status(200).json({ status: 200, data });
};

const updateone = async (req, res, next) => {
  const { id, section } = req.body.data;
  const getmongoDB = await mongoDB();
  const filter = {
    _id: ObjectId(id),
    'details.section': section,
  };
  const update = {
    $set: {
      'details.$.schoolname': req.body.data.schoolname,
    },
  };
  const data = await getmongoDB.collection('testing').updateOne(filter, update);
  console.log('data', data);

  res.status(200).json({ status: 200, data });
};

const deleteone = async (req, res, next) => {
  const { id } = req.body.data;
  const getmongoDB = await mongoDB();
  const filter = {
    _id: ObjectId(id),
  };

  const data = await getmongoDB.collection('testing').deleteOne(filter);
  console.log('data', data);
  res.status(200).json({ status: 200, data });
};

const findAll = async (req, res, next) => {
  const { offset } = req.body.data;
  const { pagesize } = req.body.data;
  const db = await mongoDB();

  const data = await db
    .collection('Login')
    .find()
    .sort({ createdat: -1 })
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();

  const totalcount = await db
    .collection('Login')
    .find()
    .sort({ createdat: -1 })
    .count();

  res.status(200).json({
    status: 200,
    data: {
      offset: offset || 0,
      pagesize: pagesize || 5,
      totalcount,
    },
  });
};

const aggWithPromise = async (req, res, next) => {
  const db = await mongoDB();
  const details = req.body.data;
  try {
    const data = await Promise.all([
      getStudentById(details),
      updateone(details),
    ]);
    data.then((value) => console.log(value));
  } catch (err) {
    console.log('err', err);
  }
};

const values = async (req) => {
  const data = await Promise.all([insertArray(req)]);

  console.log('data', data);
};

// console.log('values', values);

module.exports = {
  insertArray,
  getStudentsList,
  deleteone,
  getStudentById,
  updateone,
  findAll,
  aggWithPromise,
};
