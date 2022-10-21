const MongoClient = require('mongodb').MongoClient;
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
        // console.log("already connected return existing connection");
        db = mongoDBClient.db('Test');
        resolve(db);
      }
    } else {
      mongoDBClient.connect((err, client) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          // console.log("Connecting new connection");
          db = client.db('Test');
          resolve(db);
        }
      });
    }
  });
};

module.exports = mongoDB;
