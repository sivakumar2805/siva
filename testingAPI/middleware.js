const uuid = require('uuid');

const middleware = async (req, res, next) => {
  //   console.log('Request!@@@@@@@@@1', req);
  let uniqueID = uuid.v4();
  req.uniqueID = uniqueID;
  console.log('UniqueID', uniqueID);
  console.log('Request!##########2', req);
  next();
};

module.exports = middleware;
