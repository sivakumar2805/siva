const mongoDB = require('./mongoDB');

const studentsFn = async (listObj) => {
  const { offset, pagesize } = listObj;
  const db = await mongoDB();
  const data = await db
    .collection('testing')
    .find()
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();
  console.log('data', data);
  return { status: 200, data, offset: offset || 0, pagesize: pagesize || 5 };
};

module.exports = { studentsFn };

const validtilldata = new Date().setDate(new Date().getDate() + 7);
const validtill = new Date(validtilldata);
console.log('valid', validtill);
