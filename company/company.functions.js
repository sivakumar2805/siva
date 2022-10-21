const { ObjectId } = require('mongodb');
const mongoDB = require('../mongoDB');

const new_company = async (newObj) => {
  const { ...company } = newObj;
  const db = await mongoDB();
  const companyObj = { ...company, createdat: new Date() };
  const data = await db.collection('Company').insertOne(companyObj);
  //    res.status(200).json({ status: 201, data: data.insertedId });
  return { status: 201, data: data.insertedId };
};

const getCompany_list = async (listObj) => {
  const { offset, pagesize } = listObj;
  const db = await mongoDB();

  const columns = {
    _id: 0,
    companyid: '$_id',
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
    .collection('Company')
    .find({}, { projection: columns })
    .sort({ createdat: -1 })
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();

  const totalcount = await db
    .collection('Company')
    .find()
    .sort({ createdat: -1 })
    .count();

  //   res.status(200).json({
  //     status: 200,
  //     data,
  //     offset: offset || 0,
  //     pagesize: pagesize || 5,
  //     totalcount,
  //   });
  return {
    status: 200,
    data,
    offset: offset || 0,
    pagesize: pagesize || 5,
    totalcount,
  };
};

const updateCompany = async (updateObj) => {
  const { companyid, details } = updateObj;
  const db = await mongoDB();
  const filter = {
    _id: ObjectId(companyid),
  };

  delete details.companyid;
  const update = {
    $set: {
      ...details,
      updatedat: new Date(),
    },
  };

  const data = await db.collection('Company').updateOne(filter, update);
  console.log('Data', data);
  //   res.status(200).json({ status: 201 });
  return { status: 201 };
};

const update_UsingArray = () => {};

module.exports = { new_company, getCompany_list, updateCompany };
