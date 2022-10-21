const MongoClient = require('mongodb').MongoClient;
const MongoDBurl = 'mongodb://192.168.0.211:27017/Test';
const mongoDBClient = new MongoClient(MongoDBurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = 'Test';
const mongoDB = async () => {
  return new Promise((resolve, reject) => {
    if (mongoDBClient.topology) {
      if (mongoDBClient.topology.s.state === 'connected') {
        // console.log("already connected return existing connection");
        db = mongoDBClient.db();
        resolve(db);
      }
    } else {
      mongoDBClient.connect((err, client) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          // console.log("Connecting new connection");
          db = client.db();
          resolve(db);
        }
      });
    }
  });
};

module.exports = mongoDB;
