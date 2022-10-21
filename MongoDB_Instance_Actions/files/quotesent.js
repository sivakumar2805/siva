const getmongoDB = require('../mongoDB');
const uuid = require('uuid');

// let id = uuid.v4();

const quoteSent_Workspace = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('QuoteSent')
    .find(
      {},
      {
        projection: {
          quotesentid: 1,
          workspaceid: 1,
          workspacename: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      console.log('element', ele);
      const { entmasterid, workspaceid, workspacename, quotesentid } = ele;
      const wsdata = await mongoDB
        .collection('User_WorkSpace')
        .findOne({ entmasterid, name: workspacename }, {});

      console.log('WorkSpace', wsdata);
      const { workspaceid: abc = null, name } = wsdata || {};
      console.log('WorkSpaceID', abc);
      console.log('wsname', name);

      if (abc) {
        await mongoDB
          .collection('QuoteSent')
          .updateOne(
            { quotesentid, entmasterid, workspacename: name },
            { $set: { workspaceid: abc } }
          );
        // await mongoDB
        //   .collection('QuoteInbox')
        //   .updateOne(
        //     { quoteinboxid, entmasterid, workspacename: name },
        //     { $set: { workspaceid: abc } }
        //   );
      }
    });
  console.log('data', data);
};

const quoteInbox_Workspace = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('QuoteInbox')
    .find(
      {},
      {
        projection: {
          quoteinboxid: 1,
          workspaceid: 1,
          workspacename: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      console.log('element', ele);
      const { entmasterid, workspaceid, workspacename, quoteinboxid } = ele;
      const wsdata = await mongoDB
        .collection('User_WorkSpace')
        .findOne({ entmasterid, name: workspacename }, {});

      console.log('WorkSpace', wsdata);
      const { workspaceid: abc = null, name } = wsdata || {};
      console.log('WorkSpaceID', abc);
      console.log('wsname', name);

      if (abc) {
        await mongoDB
          .collection('QuoteInbox')
          .updateOne(
            { quoteinboxid, entmasterid, workspacename: name },
            { $set: { workspaceid: abc } }
          );
      }
    });
  console.log('data', data);
};
// quoteSent_Workspace();
// quoteInbox_Workspace();

const uomFn = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('User_UOM')
    .find(
      {},
      {
        projection: {
          _id: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      const id = uuid.v4();
      // console.log('Element', ele);
      console.log('ID@@@@', id);
      await mongoDB
        .collection('User_UOM')
        .updateOne(
          { _id: ele._id },
          { $set: { uomnameid: id, createdat: new Date() } }
        );
    });
  console.log('data', data);
};
// uomFn();

const taxFn = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('User_Tax')
    .find(
      {},
      {
        projection: {
          _id: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      const id = uuid.v4();
      console.log('ID', id);
      await mongoDB
        .collection('User_Tax')
        .updateOne(
          { _id: ele._id },
          { $set: { createdat: new Date(), usertaxid: id } },
          { upsert: false }
        );
    });
  console.log('data', data);
};

// taxFn();

const tandcFn = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('User_TandC')
    .find(
      {},
      {
        projection: {
          _id: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      console.log('Element', ele);
      await mongoDB
        .collection('User_TandC')
        .updateOne({ _id: ele._id }, { $set: { tandcid: id } });
    });
  console.log('data', data);
};

// tandcFn();

const counterFn = async () => {
  const mongoDB = await getmongoDB();
  const data = await mongoDB
    .collection('User_Count')
    .find(
      {},
      {
        projection: {
          _id: 1,
          entmasterid: 1,
        },
      }
    )
    .sort({ createdat: -1 })
    .forEach(async (ele) => {
      console.log('Element', ele);
      await mongoDB
        .collection('User_Count')
        .updateOne({ _id: ele._id }, { $set: { counterid: id } });
    });
};

// counterFn();
