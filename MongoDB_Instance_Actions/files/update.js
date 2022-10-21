const getmongoDB = require('../mongoDB');
const uuid = require('uuid');

const workspace = async () => {
  const mongoDB = await getmongoDB();

  const data = await mongoDB
    .collection('User_WorkSpace')
    .find({}, {})
    .forEach(async (element) => {
      let wsid = uuid.v4();
      console.log('UUID', wsid);
      await mongoDB
        .collection('User_WorkSpace')
        .updateOne(
          { workspaceid: element.workspaceid },
          { $set: { workspaceid: wsid } }
        );
    });
};
// workspace();
