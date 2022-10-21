const { ObjectId } = require('mongodb');
const getmongoDB = require('../mongoDB');

const newOrder = async (req, res, next) => {
  const order = req.body.data;
  const insertObj = { ...order, createdat: new Date() };
  const mongoDB = await getmongoDB();
  console.log('order', order);
  const data = await mongoDB.collection('orderDetails').insertOne(insertObj);
  console.log('data', data);
  res.status(200).json({ status: 201, data: data.insertedId });
  // let check;
  // check = order.type !== 'P' || 'S' ? 'OK' : { data: 'invalid type' };
  // console.log('check', check);
};

const orderList = async (req, res, next) => {
  const { offset } = req.body.data || 0;
  const { pagesize } = req.body.data || 5;
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('orderDetails')
    .find()
    .skip(offset ? offset : 0)
    .limit(pagesize ? pagesize : 5)
    .toArray();

  const totalcount = await mongoDB.collection('orderDetails').countDocuments();
  console.log('data', data);
  res.status(200).json({
    status: 200,
    data,
    offset: offset || 0,
    pagesize: pagesize || 5,
    totalcount,
  });
};

const orderById = async (req, res, next) => {
  const { id, type } = req.body.data;
  const mongoDB = await getmongoDB();
  const filter = {
    _id: ObjectId(id),
    type,
  };

  const columns = {
    _id: 0,
    orderid: '$_id',
    type: 1,
    title: 1,
    description: 1,
    workspaceid: 1,
  };

  const data = await mongoDB
    .collection('orderDetails')
    .findOne(filter, { projection: columns });
  res.status(200).json({ status: 200, data });
};

const deleteOrder = async (req, res, next) => {
  const { orderid, type } = req.body.data;
  const mongoDB = await getmongoDB();
  const filter = {
    // _id: ObjectId(orderid),
    type,
  };
  const data = await mongoDB.collection('orderDetails').deleteOne(filter);
  console.log('dataa', data);
  res.status(200).json({ status: 201 });
};
module.exports = { newOrder, orderList, orderById, deleteOrder };

// if (order.type === 'P') {
//   order.items.push({ type: 'purchase Order' });
// } else if (order.type === 'S') {
//   order.items.push({ type: 'Sales Order' });
// }
// if (order.type !== 'P' || 'S') {
//   return res.status(200).json({ status: 400 });
// } else if (order.type === 'P' || 'S') {
//   res.status(200).json({ status: 201, data: data.insertedId });
// } else {
//   return res.status(200).json({ status: 400 });
// }
