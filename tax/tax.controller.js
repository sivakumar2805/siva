const mongoDB = require('../mongoDB');
const functions = require('./tax.functions');

const new_tax = async (req, res, next) => {
  const tax = req.body.data;
  const db = await mongoDB();
  const taxObj = { ...tax, isactive: true, createdat: new Date() };
  const data = await db.collection('Tax').insertOne(taxObj);
  res.status(200).json({ status: 201, data: data.insertedId });
  // const newObj = req.body.data;
  // const data = await functions.new_tax(newObj);
  // res.status(200).json(data);
};

const get_taxList = async (req, res, next) => {
  const { offset } = req.body.data;
  const { pagesize } = req.body.data;
  const db = await mongoDB();

  const columns = {
    _id: 0,
    taxid: '$_id',
    taxname: 1,
    rate: 1,
    isactive: 1,
  };

  const data = await db
    .collection('Tax')
    .find({}, { projection: columns })
    .sort({ createdat: -1 })
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();

  const totalcount = await db
    .collection('Tax')
    .find()
    .sort({ createdat: -1 })
    .count();

  res.status(200).json({
    status: 200,
    data,
    offset: offset || 0,
    pagesize: pagesize || 5,
    totalcount,
  });
};

module.exports = { new_tax, get_taxList };
