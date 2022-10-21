const { ObjectId } = require('mongodb');
const mongoDB = require('./mongoDB');

const findWithEmail = async (req, res, next) => {
  const db = await mongoDB();
  const details = req.body.data.list;
  console.log('details', details);

  details.find((e) => {
    console.log('EEEEE', e.email);
  });

  details.map(async (e) => {
    console.log('element', e);
    const { email } = e;

    console.log('values', email);

    const find = await db
      .collection('Login')
      .findOne({ email: e.email }, { projection: { GUID: 1 } });
    console.log('find', find);
    const { GUID } = find;
    console.log('GUID', GUID);

    // const data = [];
    // data['obj1'] = { email: details[0].email, GUID: find.GUID };
    // data['obj2'] = { email: details[1].email, GUID: find.GUID };
    // console.log('data', data);

    // const data2 = Object.entries(data);
    // console.log('data2@@@@@@@', data2);
    // const data3 = Object.keys(find);
    // console.log('data2', data3);
    // await db.collection('siva').insertOne({ value: data });
  });

  res.status(200).json({ status: 200 });
};

module.exports = { findWithEmail };

// const newQuote = async (quoteObj) => {
//   const { inputdata, GUID, email, isent, entmasterid } = quoteObj;
//   const wsData = await queries.getWorkSpaceByID(inputdata.workspaceid);
//   if (!wsData) {
//     return {
//       status: 400,
//       data: 'Invalid WorkSpace',
//     };
//   }
//   inputdata.workspacename = wsData.name;
//   console.log('InputtData', inputdata.isautoref);

//   let refno;

//   const permission = isent ? entmasterid : GUID;
//   refno =
//     inputdata.isautoref === true
//       ? await prefixFn.updatePrefix({ prefixes: 'Quote/', GUID })
//       : inputdata.refno;

//   console.log('No', inputdata);
//   console.log('No', refno);

//   const linkedArray = await queries.find_IFUserExists(inputdata.linked);
//   inputdata.linked = linkedArray;
//   console.log('Quote Object', { ...inputdata, refno });
//   const newquote = JSON.stringify({ ...inputdata, refno });
//   postgresql();
//   const rows = await process.postgresql.query(
//     'call CreateNewQuote($1,$2,$3,$4,$5)',
//     [GUID, entmasterid, email, newquote, null]
//   );

//   if (rows[0].quote != null && rows[0].quote.MessageID) {
//     return {
//       status: 400,
//       data: rows[0].quote.Message,
//     };
//   }
//   // // const validtilldata = new Date().setDate(new Date().getDate() + 7);
//   // // const validtill = new Date(validtilldata);
//   // // const notificationObj = {
//   // //   linked: inputdata.linked,
//   // //   title: inputdata.title,
//   // //   expires: validtill,
//   // //   email,
//   // //   id: rows[0].quote.id,
//   // //   type: 'quote',
//   // // };
//   // // console.log('Notification Object', notificationObj);
//   await Promise.all([
//     insertQuoteSent_Monogo(rows[0].quote.id),
//     // queries.insertNotification(notificationObj),
//   ]);
//   console.log('Complete 1');
//   // console.log('QuoteInbox Object', rows[0].quote.qiobj);
//   const quoteInboxObj = rows[0].quote.qiobj;
//   await Promise.all(
//     quoteInboxObj.map(async (element) => {
//       console.log('Element', element);
//       const { quoteinboxid, fromuser, toemail } = element;
//       await queries.insertQuoteInbox_Monogo({ quoteinboxid, fromuser });
//       await quoteMail({ quoteinboxid, fromuser, toemail });
//     })
//   );
//   // const sendQuoteMail = await Promise.all(
//   //   quoteInboxObj.map(async (element) => {
//   //     console.log('Element', element);
//   //     const { quoteinboxid, fromuser, toemail } = element;
//   //     await mail.sendQuoteMail({ quoteinboxid, toemail });
//   //   })
//   // );
//   return {
//     data: rows[0].quote,
//     status: 201,
//   };
// };

const checking = async () => {
  const db = await mongoDB();
  const data = await db.collection('Prefix').countDocuments({ GUID: '123' });
  if (!data) {
    console.log('No data');
  }
  console.log('data', data);
};

checking();
