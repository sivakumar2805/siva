import * as dotenv from 'dotenv';
dotenv.config();
import SequelizePkg from 'sequelize';
const { literal } = SequelizePkg;
import getMongoDB from '../../common/mongoDB.js';
import { v4 } from 'uuid';
import { createNewLoginCredentials } from '../../login/login.queries.js';
import * as QModels from './quotesent.model.js';
import postgresql from '../../common/pg.js';
import { getAutoRefNo } from '../../settings/userprefix/userprefix.queries.js';
import * as rfqSentQueries from '../../rfq/rfqSent/rfqsent.queries.js';

import * as wsQueries from '../../settings/workSpace/workspace.queries.js';
import * as qiQueries from '../quoteinbox/controllers/qi.queries.js';

import { quoteMail } from '../../common/nodemail.js';
import {
  insertUserDefaultPrefix,
  find_IFUserExists,
} from '../../login/login.queries.js';
import { getNodeMailer_Transport } from '../../common/mailtransport.js';

const linkQuote = async (linkObj) => {
  console.log('@@@QuoteLink');
  const mongoDB = await getMongoDB();
  const { linked, email, id, quoteObj, refno } = linkObj;
  linked.forEach(async (data) => {
    const exUserData = await mongoDB.collection('Login').findOne(
      { email: data.email },
      {
        projection: {
          email: 1,
          GUID: 1,
        },
      }
    );

    delete quoteObj.workspaceid;
    delete quoteObj.workspacename;
    delete quoteObj.linked;
    delete quoteObj.recipientname;

    const GUID = exUserData?.GUID ? exUserData.GUID : v4();
    const entmasterid = exUserData?.entmasterid ? exUserData.entmasterid : null;

    const addInbox = await mongoDB.collection('QuoteInbox').insertOne({
      createdby: email,
      quotesentid: id,
      touserid: GUID,
      entmasterid,
      ...quoteObj,
      refno,
      createdat: new Date(),
    });
    console.log(GUID, 'GUID');
    let exists = 'N';
    exists = !exUserData ? 'N' : 'Y';
    switch (exists) {
      case 'Y':
        await addInbox;
        break;
      case 'N':
        const creObj = { email: data.email, GUID };
        await Promise.all([createNewLoginCredentials(creObj), addInbox]);
        break;
    }
  });

  return true;
};

const quoteSentList = async (listObj) => {
  const { entmasterid, workspaceid, status, offset, pagesize } = listObj;

  const activeStatus =
    status === '0'
      ? { valid: { $lt: new Date() } }
      : status === '1'
      ? { valid: { $gt: new Date() } }
      : null;
  const wsid = workspaceid !== Number(-1) ? { workspaceid: workspaceid } : null;
  // const createdby = isent ? { entmasterid } : { createdby: GUID };

  const whereClause = {
    // ...createdby,
    entmasterid,
    ...activeStatus,
    ...wsid,
  };

  const columns = {
    _id: 0,
    quotesentid: 1,
    title: 1,
    valid: '$expirydate',
    refno: '$quoterefno',
    quotedate: 1,
    quotevalue: '$grandtotal',
    createdat: 1,
    itemcount: 1,
    workspacename: 1,
    selleraddress: 1,
    isread: 1,
    readat: 1,
  };

  const mongoDB = await getMongoDB();
  const data = await mongoDB
    .collection('QuoteSent')
    .find(whereClause, { projection: columns })
    .skip(offset ? offset : 0)
    .limit(pagesize > 0 ? pagesize : 5)
    .sort({ createdat: -1 })
    .toArray();

  const totalCount = await mongoDB
    .collection('QuoteSent')
    .countDocuments(whereClause);

  return {
    status: 200,
    data,
    totalCount,
    offset: offset || 0,
    pageSize: pagesize || 5,
  };
};

const quoteDataBy_QuoteSentID = async (viewObj) => {
  const { entmasterid, quotesentid } = viewObj;
  // const createdby = isent ? { entmasterid } : { createdby: GUID };
  const whereClause = {
    // ...createdby,
    entmasterid,
    quotesentid,
  };
  const columns = {
    quotesentid: 1,
    _id: 0,
    title: 1,
    valid: '$expirydate',
    refno: '$quoterefno',
    date: '$quotedate',
    quotevalue: '$grandtotal',
    createdat: 1,
    touser: '$recipientname',
    items: 1,
    workspacename: 1,
    selleraddress: 1,
    buyeraddress: 1,
    shippingaddress: 1,
    tandc: 1,
    description: 1,
    commontax: 1,
    totalitemvalue: 1,
    grandtotal: 1,
    isread: 1,
    readat: 1,
    itemcount: 1,
    sento: {
      tousername: '$sentto.tousername',
      isread: '$sentto.isread',
      readat: '$sentto.readat',
      issent: '$sentto.issent',
      sentat: '$sentto.sentat',
    },
  };
  const aggregate = [
    {
      $match: {
        quotesentid,
      },
    },
    {
      $unwind: {
        path: '$sentto',
        preserveNullAndEmptyArrays: true,
      },
    },

    {
      $project: columns,
    },
    {
      $group: {
        _id: {
          quotesentid: '$quotesentid',
          grandtotal: '$grandtotal',
          items: '$items',
          tandc: '$tandc',
          workspacename: '$workspacename',
          selleraddress: '$selleraddress',
          buyeraddress: '$buyeraddress',
          shippingaddress: '$shippingaddress',
          description: '$description',
          commontax: '$commontax',
          totalitemvalue: '$totalitemvalue',
          date: '$date',
          createdat: '$createdat',
          title: '$title',
          isread: '$isread',
          readat: '$readat',
          valid: '$valid',
          refno: '$refno',
          issent: '$issent',
          sentat: '$sentat',
        },
        sentto: {
          $push: '$sento',
        },
      },
    },
    {
      $project: {
        _id: 0,
        quotesentid: '$_id.quotesentid',
        quotevalue: '$_id.grandtotal',
        grandtotal: '$_id.grandtotal',
        tandc: '$_id.tandc',
        items: '$_id.items',
        workspacename: '$_id.workspacename',
        selleraddress: '$_id.selleraddress',
        buyeraddress: '$_id.buyeraddress',
        shippingaddress: '$_id.shippingaddress',
        description: '$_id.description',
        commontax: '$_id.commontax',
        totalitemvalue: '$_id.totalitemvalue',
        date: '$_id.date',
        createdat: '$_id.createdat',
        title: '$_id.title',
        valid: '$_id.valid',
        refno: '$_id.refno',
        // isread: '$_id.isread',
        // readat: '$_id.readat',
        issent: '$_id.issent',
        sentat: '$_id.sentat',
        sentto: 1,
      },
    },
  ];

  const mongoDB = await getMongoDB();
  // const data1 = await mongoDB
  //   .collection('QuoteSent')
  //   .findOne(whereClause, { projection: columns });

  const [data] = await mongoDB
    .collection('QuoteSent')
    .aggregate(aggregate)
    .toArray();

  if (data === null) {
    return {
      data: 'No data found',
      status: 404,
    };
  }

  if (data.isread === false) {
    await changeRead_Status_QuoteSent(quotesentid);
  }
  return {
    data,
    status: 200,
  };
};

const quoteItemsBy_QuoteSentID = async (viewObj) => {
  const { entmasterid, quotesentid } = viewObj;
  const whereClause = {
    entmasterid,
    quotesentid,
  };

  const columns = {
    items: 1,
  };

  const mongoDB = await getMongoDB();
  const data = await mongoDB
    .collection('QuoteSent')
    .findOne(whereClause, { projection: columns });

  if (!data) {
    return {
      data: 'No data found',
      status: 404,
    };
  }
  return {
    data,
    // data1:data1,
    status: 200,
  };
};

const getQuoteSent_MasterData_ForMongo = async (quotesentid) => {
  const data = JSON.parse(
    JSON.stringify(
      await QModels.quotesent.findOne({
        where: {
          quotesentid,
        },
        include: [
          {
            model: QModels.quotesentto,
            attributes: [
              'fromuserid',
              'touserid',
              'tousername',
              'title',
              'expirydate',
            ],
            required: false,
            as: 'sentto',
          },
          {
            model: QModels.quotesent_items,
            attributes: [
              'qsitemid',
              'itemid',
              'itemname',
              'quantity',
              'price',
              'uomname',
              'total',
              ['description', 'itemdesc'],
              'itemtype',
            ],
            required: false,
            as: 'items',
            include: [
              {
                model: QModels.quotesent_itemtax,
                attributes: ['name', 'rate', 'qsitemid', 'taxid'],
                required: false,
                as: 'itemtax',
              },
              {
                model: QModels.quotesent_itemprops,
                attributes: ['name', 'value', 'qsitemid'],
                required: false,
                as: 'itemprops',
              },
            ],
          },
          {
            model: QModels.quotesent_selleraddress,
            attributes: [
              'id',
              'company',
              'address',
              'city',
              'state',
              'pincode',
              'taxid',
              'country',
              'contactname',
              'email',
              'phonenumber',
            ],
            required: false,
            as: 'selleraddress',
          },
          {
            model: QModels.quotesent_buyeraddress,
            attributes: [
              'id',
              'company',
              'address',
              'city',
              'state',
              'pincode',
              'taxid',
              'country',
              'contactname',
              'email',
              'phonenumber',
            ],
            required: false,
            as: 'buyeraddress',
          },
          {
            model: QModels.quotesent_shippingaddress,
            attributes: [
              'id',
              'company',
              'address',
              'city',
              'state',
              'pincode',
              'taxid',
              'country',
              'contactname',
              'email',
              'phonenumber',
            ],
            required: false,
            as: 'shippingaddress',
          },
          {
            model: QModels.quotesent_commontax,
            attributes: ['name', 'rate', 'taxid'],
            required: false,
            as: 'commontax',
          },
          {
            model: QModels.quotesent_tandc,
            attributes: ['tandc', 'tandcid'],
            required: false,
            as: 'tandc',
          },
        ],
        attributes: [
          'quotesentid',
          'createdby',
          'entmasterid',
          'workspaceid',
          'workspacename',
          'title',
          'description',
          'quotedate',
          'expirydate',
          'itemcount',
          'quoterefno',
          'quotevalue',
          'grandtotal',
          'totalitemvalue',
          'currencycode',
          'countrycode',
          'locale',
          'isread',
          'readat',
          'createdat',
        ],
      })
    )
  );
  return data;
};

const insertQuoteSent_Monogo = async (quotesentid) => {
  console.log('QuoteID', quotesentid);
  const qsData = await getQuoteSent_MasterData_ForMongo(quotesentid);
  const mongoDB = await getMongoDB();
  await mongoDB.collection('QuoteSent').insertOne({
    ...qsData,
    createdat: new Date(qsData.createdat),
    quotedate: new Date(qsData.quotedate),
    expirydate: new Date(qsData.expirydate),
    itemcount: Number(qsData.itemcount),
    quotevalue: Number(qsData.quotevalue),
    grandtotal: Number(qsData.grandtotal),
    totalitemvalue: Number(qsData.totalitemvalue),
    workspaceid: Number(qsData.workspaceid),
  });

  return true;
};

const newQuote = async (quoteObj) => {
  const { inputdata, GUID, email, entmasterid } = quoteObj;

  const wsData = await wsQueries.getWorkSpaceByID(inputdata.workspaceid);
  const mongoDB = await getMongoDB();
  if (!wsData) {
    return {
      status: 400,
      data: 'Invalid WorkSpace',
    };
  }
  inputdata.workspacename = wsData.name;
  const userid = {
    entmasterid,
  };
  const count = await mongoDB.collection('User_Prefix').countDocuments(userid);

  console.log('count', count);

  if (!count) {
    await insertUserDefaultPrefix(userid);
  }

  const autoRefNoObj = {
    prefixType: 'Quote/',
    ...userid,
    entmasterid,
  };

  let refno;
  refno =
    inputdata.isautoref === true
      ? await getAutoRefNo(autoRefNoObj)
      : inputdata.refno;

  console.log('InputDataa', inputdata);
  console.log('RefNo', refno);

  const data = await mongoDB
    .collection('QuoteSent')
    .insertOne({ ...inputdata, GUID, entmasterid, createdat: new Date() });

  console.log('dataaa', data);
  // const linkedArray = await find_IFUserExists(inputdata.linked);
  // inputdata.linked = linkedArray;

  // Insert Into Postgres (509 - 522)

  /**console.log('Quote Object', { ...inputdata, refno });
  const newquote = JSON.stringify({ ...inputdata, refno });
  postgresql();
  const rows = await process.postgresql.query(
    'call CreateNewQuote($1,$2,$3,$4,$5)',
    [GUID, entmasterid, email, newquote, null]
  );

  if (rows[0].quote != null && rows[0].quote.MessageID) {
    return {
      status: 400,
      data: rows[0].quote.Message,
    };
  }*/

  // // const validtilldata = new Date().setDate(new Date().getDate() + 7);
  // // const validtill = new Date(validtilldata);
  // // const notificationObj = {
  // //   linked: inputdata.linked,
  // //   title: inputdata.title,
  // //   expires: validtill,
  // //   email,
  // //   id: rows[0].quote.id,
  // //   type: 'quote',
  // // };
  // // console.log('Notification Object', notificationObj);

  //

  await Promise.all([
    insertQuoteSent_Monogo(rows[0].quote.id),
    // queries.insertNotification(notificationObj),
  ]);
  console.log('Complete 1');
  // console.log('QuoteInbox Object', rows[0].quote.qiobj);
  // const quoteInboxObj = rows[0].quote.qiobj;

  // if (quoteInboxObj.length > 0) {
  //   const transporter = await getNodeMailer_Transport();
  //   await Promise.all(
  //     quoteInboxObj.map(async (element) => {
  //       // console.log('Element', element);
  //       const { quoteinboxid, fromuser, toemail } = element;
  //       await qiQueries.insertQuoteInbox_Monogo({ quoteinboxid, fromuser });
  //       if (
  //         process.env.NODE_ENV === 'production' &&
  //         process.env.PLATFORM === 'aws'
  //       ) {
  //         await quoteMail({ quoteinboxid, fromuser, toemail }, transporter);
  //       }
  //     })
  //   );

  //   await transporter.close();
  // }

  // const sendQuoteMail = await Promise.all(
  //   quoteInboxObj.map(async (element) => {
  //     console.log('Element', element);
  //     const { quoteinboxid, fromuser, toemail } = element;
  //     await mail.sendQuoteMail({ quoteinboxid, toemail });
  //   })
  // );
  // delete rows[0].quote.qiobj;
  return {
    // data: rows[0].quote,
    data: data.insertedId,
    status: 201,
  };
};

const changeRead_Status_QuoteSent = async (quotesentid) => {
  const mongoDB = await getMongoDB();
  await Promise.all([
    QModels.quotesent.update(
      {
        isread: true,
        readat: literal('Current_TimeStamp'),
      },
      {
        where: { quotesentid },
      }
    ),
    mongoDB
      .collection('QuoteSent')
      .updateOne(
        { quotesentid },
        { $set: { isread: true, readat: new Date() } }
      ),
  ]);
};

const quoteLink_ByType = async (quoteObj) => {
  const { quotesentid, type } = quoteObj;

  switch (type) {
    case 'RECIPIENTS':
      break;
    case 'PDF':
      break;
    default:
      break;
  }
};

const quoteSentTo_Inbox = async (linkObj) => {
  const { quotesentid, email, GUID, entmasterid } = linkObj;
  let { linked } = linkObj;
  const linkedArray = await find_IFUserExists(linked);

  // recipientid: exUserData.GUID,
  // recipientname: exUserData.email,
  // entmasterid: exUserData.entmasterid,

  // linked = JSON.stringify({ linked: linkedArray });
  // postgresql();
  // const rows = await process.postgresql.query(
  //   'call StoreQuoteInbox($1,$2,$3,$4,$5,$6)',
  //   [GUID, email, entmasterid, quotesentid, linked, null]
  // );
  // if (rows[0].quote.Message) {
  //   return {
  //     status: 400,
  //     data: rows[0].quote.Message,
  //   };
  // }
  // const quoteInboxObj = rows[0].quote.qiobj;

  const mongoDB = await getMongoDB();
  const inboxExists = await mongoDB
    .collection('QuoteInbox')
    .countDocuments({ quotesentid });
  console.log('11111111111111111111111111', inboxExists);

  if (inboxExists === 0) {
    if (linkedArray.length > 0) {
      const transporter = await getNodeMailer_Transport();
      await Promise.all(
        linkedArray.map(async (element) => {
          // console.log('Element', element);
          const { wsid, name, recipientid, recipientname } = element;
          const quoteinboxid = v4();
          // const { quoteinboxid, fromuser, toemail } = element;
          const inbox = await qiQueries.insertQuoteInbox_Monogo({
            quotesentid,
            entmasterid,
            touserid: recipientid,
            tousername: recipientname,
            inboxENTID: element.entmasterid,
            quoteinboxid,
            fromuser: email,
            workspaceid: wsid,
            workspacename: name,
          });

          if (inbox.status) {
            if (
              process.env.NODE_ENV === 'production' &&
              process.env.PLATFORM === 'aws'
            ) {
              await quoteMail(
                { quoteinboxid, fromuser, toemail: recipientname },
                transporter
              );
            }
          }
        })
      );

      await transporter.close();
    }
    return {
      status: 400,
      data: 'Already Sent',
    };
  }

  return {
    sta,
  };
};

export {
  newQuote,
  linkQuote,
  insertQuoteSent_Monogo,
  quoteSentList,
  quoteDataBy_QuoteSentID,
  quoteItemsBy_QuoteSentID,
  quoteSentTo_Inbox,
};
// if (!count) {
//   await db
//     .collection('Siva_Permission')
//     .updateOne(filter, update, { upsert: true });
// } else {
//   await db
//     .collection('Siva_Permission')
//     .findOneAndUpdate(filter, update, { upsert: true });
// }
