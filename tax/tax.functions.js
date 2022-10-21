const mongoDB = require('../mongoDB');

const new_tax = async (newObj) => {
  const { ...tax } = newObj;
  const db = await mongoDB();
  const taxObj = { ...tax, isactive: true, createdat: new Date() };
  const data = await db.collection('Tax').insertOne(taxObj);
  //   res.status(200).json({ status: 201, data: data.insertedId });
  return { status: 200, data: data.insertedId };
};

module.exports = { new_tax };
