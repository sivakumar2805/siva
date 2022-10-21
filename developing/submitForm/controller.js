const { ObjectId } = require("bson");
const mongoDB = require("./mongoDB");

const insert = async (req, res, next) => {
  const getData = req.body.data;
  const db = await mongoDB();
  const data = await db.collection("signupform").insertOne(getData);
  console.log("data", data);
  // const { insertedId } = data;
  // const id = insertedId;
  res.status(201).json({ status: 201, data: data.insertedId });
  //   res.status(201).json({ status: 201, id });
};

const findall = async (req, res, next) => {
  const db = await mongoDB();
  const data = await db.collection("signupform").find().toArray();
  res.status(200).json({ status: 200, data });
};

const findOne = async (req, res, next) => {
  const db = await mongoDB();
  const getData = req.body.data;
  const { id } = getData;
  const filter = {
    _id: ObjectId(id),
  };
  console.log("filterrrrr", filter);

  const columns = {
    name: 1,
    subject: 1,
    emails: 1,
    phonenumbers: 1,
  };
  console.log("columns", columns);

  const data = await db
    .collection("signupform")
    .findOne(filter, { projection: columns });
  console.log("data", data);
  res.status(200).json({ status: 200, data });
};
module.exports = { insert, findall, findOne };
