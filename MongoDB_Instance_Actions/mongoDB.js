// import { MongoClient } from 'mongodb';
const { MongoClient } = require('mongodb');
const MongoDBurl = 'mongodb://192.168.0.211:27017/localdev';
const mongoDBClient = new MongoClient(MongoDBurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db;

const mongoDB = async () => {
  return new Promise((resolve, reject) => {
    if (mongoDBClient.topology) {
      if (mongoDBClient.topology.s.state === 'connected') {
        console.log('already connected return existing connection');
        db = mongoDBClient.db();
        resolve(db);
      }
    } else {
      mongoDBClient.connect((err, client) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log('Connecting new connection');
          db = client.db();
          console.log('db', db);
          resolve(db);
        }
      });
    }
  });
};

// export default mongoDB;
module.exports = mongoDB;

// const getmongoDB = require('./mongoDB');

// const deleteQuoteSent = async () => {
//   const entmasterid = '61cb15d59dc11c4d6bc0f321';
//   const mongoDB = await getmongoDB();
//   const data = await mongoDB
//     .collection('QuoteSent')
//     .find({ entmasterid }, { _id: 1 })
//     .limit()
//     .sort({ timestamp: -1 })
//     .toArray();

//   const idArray = data.map(function (doc) {
//     return doc._id;
//   });
//   await mongoDB.collection('QuoteSent').deleteMany({ _id: { $in: idArray } });
//   //   console.log(idArray);
// };

// // deleteQuoteSent();
