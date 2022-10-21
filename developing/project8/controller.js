const { ObjectId } = require('mongodb');
const model = require('./model');
const mongoDB = require('./mongoDB');

const insertdetails = async (req, res, next) => {
  const details = req.body.data;
  const db = await mongoDB();

  const { name, age, email, qualification } = details;
  try {
    const data = await JSON.parse(
      JSON.stringify(
        await model.customerProfile.create({
          name,
          age,
          email,
        })
      )
    );
    console.log(data);
    const { customid } = data;
    console.log(customid);

    // qualification.forEach(async (qualify) => {
    //   await model.custQualify.create({
    //     customid,
    //     qualification: qualify.marks,
    //   });
    // });
    await Promise.all(
      qualification.map(async (qualify) => {
        await model.custQualify.create({
          customid,
          qualification: qualify.marks,
        });

        // console.log("service", service);
      })
    );

    console.log(qualification, 'qualify');

    const data2 = JSON.parse(
      JSON.stringify(
        await model.customerProfile.findOne({
          where: {
            customid,
          },
          include: [
            {
              model: model.custQualify,
              attributes: [['qualification', 'marks']],
              as: 'qualification',
            },
          ],
          attributes: ['name', 'age', 'email'],
        })
      )
    );
    console.log('data2', data2);

    await db.collection('order').insertOne(data2);
    res.status(201).json({ status: 201, data });
  } catch (error) {
    console.log('errorrrrrr', error);
  }
};

const findOne = async (req, res, next) => {
  const details = req.body.data;
  const { customid } = details;
  const data = await JSON.parse(
    JSON.stringify(
      await model.customerProfile.findOne({
        where: {
          customid,
        },
        include: [
          {
            model: model.custQualify,
            attributes: [['qualification', 'marks']],
            as: 'qualification',
          },
        ],
        attributes: ['name', 'age', 'email'],
      })
    )
  );
  console.log('data2', data);
  res.status(200).json({ status: 200, data });
};

const insertNew = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const details = req.body.data;

  const data = await getmongoDB.collection('order').insertOne(details);
  console.log(data);
  res.status(201).json({ status: 201, data: data.insertedId });
};

const updating = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const details = req.body.data;
  const { personid } = details;
  const detailsid = ObjectId().toString();

  const data = await getmongoDB.collection('order').updateOne(
    { _id: ObjectId(personid) },
    {
      $addToSet: {
        // about: {
        //   detailsid: detailsid,
        //   ...details,
        //   createdat: new Date(),
        // },
        // details: {
        //   detailsid: detailsid,
        //   ...details,
        //   createdat: new Date(),
        // },
        marks: {
          detailsid: detailsid,
          ...details,
          createdat: new Date(),
        },
        // personal: {
        //   detailsid: detailsid,
        //   ...details,
        //   createdat: new Date(),
        // },
      },
    }
  );
  console.log('data', data);
  res.status(200).json({ status: 201, data });
};

const aggregation = async (req, res, next) => {
  const { templateid } = req.body.data;
  // const { offset } = req.body.data || 0;
  // const { pagesize } = req.body.data || 5;

  const { offset } = req.body.data;
  const { pagesize } = req.body.data;
  console.log('templateid', templateid);
  // const personid = ObjectId().toString();
  const getmongoDB = await mongoDB();

  const filter = {
    _id: ObjectId(templateid),
  };
  console.log('filter', filter);

  // const columns = {
  //   // "version.versionid": 1,
  //   // "version.title": 1,
  //   _id: 0,
  //   "about.detailsid": 1,
  //   "about.personid": 1,
  // };

  // const aggpipe = [
  //   {
  //     $match: filter,
  //   },
  //   {
  //     $project: {
  //       about: {
  //         $slice: [detailsid, 0],
  //       },
  //     },
  //   },
  // ];

  const data = await getmongoDB.collection('order').findOne(filter, {
    projection: {
      _id: 0,
      name: 0,
      age: 0,
      title: 0,
      interests: 0,
      about: 0,
      personal: 0,
      // "marks.personid": 0,
      // marks: { $slice: [1, 3] },
      // marks: { $slice: (offset ? offset : 0) && pagesize > 0 ? pagesize : 5 },
      marks: {
        $slice: [offset ? offset : 0, pagesize > 0 ? pagesize : 5],
      },

      // marks: { $slice: [offset, pagesize] },
    },
  });
  const { marks } = data;

  const result = marks.map(({ detailsid, personid }) => ({
    detailsid,
    personid,
  }));
  console.log(result);

  const map = marks.map((e) => {
    return { detailsid: e.detailsid, personid: e.personid };
  });

  console.log(map);

  console.log('data', data);
  res.status(200).json({ status: 200, data: data, map });
};

const deleting = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const { id, detailsid } = req.body.data;
  const filter = {
    _id: ObjectId(id),
    'marks.detailsid': detailsid,
  };
  const data = await getmongoDB
    .collection('order')
    .updateOne(filter, { $pull: { marks: { detailsid } } });
  console.log('data', data);
  res.status(200).json({ status: 200, data });
};

const signUp = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const body = req.body.data;
  const { name, email, password } = body;

  const count = await getmongoDB.collection('siva').countDocuments({ email });
  console.log('count', count);
  if (count === 0) {
    const data = await getmongoDB.collection('siva').insertOne(body);
    const { insertedId } = data;
    return res.status(201).json({ status: 201, data: insertedId.toString() });
  }
  res
    .status(200)
    .json({ status: 400, data: 'This Email is Already Registered' });
};

// const signIn = async (req, res, next) => {
//   const getmongoDB = await mongoDB();
//   const body = req.body.data;
//   const { email, password } = body;
//   const filter = {
//     email,
//   };

//   const columns = {
//     _id: 0,
//     name: 1,
//     password: 1,
//   };
//   const data = await getmongoDB
//     .collection('siva')
//     .findOne(filter, { projection: columns });
//   console.log('data', data);

//   if (!data) {
//     return res.status(200).json({ status: 400, data: "Email Doesn't Exist" });
//   }

//   if (data.password !== password) {
//     return res
//       .status(200)
//       .json({ status: 400, data: "PassWord Doesn't Match" });
//   }
//   return res.status(200).json({ status: 200, data: data });
// };

const signIn = async (req, res, next) => {
  const getmongoDB = await mongoDB();
  const body = req.body.data;
  const { email, password } = body;
  const filter = {
    email,
  };

  const columns = {
    _id: 0,
    name: 1,
    password: 1,
  };
  const data = await getmongoDB
    .collection('siva')
    .findOne(filter, { projection: columns });
  // console.log('data', data);

  let valid;
  valid =
    data === null
      ? res.status(200).json({ status: 400, data: "Email Doesn't Exist" })
      : data.password !== password
      ? res.status(200).json({ status: 400, data: "Password Doesn't Match" })
      : 'v';

  // console.log(valid);
  if (valid === 'v') {
    return res.status(200).json({ status: 200, data });
  }
};

// const find = async (req, res) => {
//   try {
//     const db = await mongoDB();
//     const store = req.body.data.list;
//     console.log('store', store);

//     const value = store.map(async (e) => {
//       console.log('e', e.email);

//       const finding = await db
//         .collection('Login')
//         .findOne({ email: e.email }, { projection: { GUID: 1 } });
//       console.log('find', finding.GUID);

//       let array = [];
//       array.push({ email: e.email }, { GUID: finding.GUID });
//       console.log('array', ...array);
//       return [...array, ...array];
//     });
//     console.log('value', value);
//     await db.collection('siva').insertOne(...array);
//     console.log('insert', insertNew);
//   } catch (err) {
//     console.log('error', err);
//   }
// };

// const find = async (req, res) => {
//   try {
//     const db = await mongoDB();
//     const store = req.body.data.list;
//     console.log('store', store);

//     const value = await store.map(async (e) => {
//       console.log('e', e.email);

//       const finding = await db
//         .collection('Login')
//         .findOne({ email: e.email }, { projection: { GUID: 1 } });
//       console.log('find', finding.GUID);

//       return { email: e.email, GUID: finding.GUID };
//       // const total = value
//     });
//     const details =  value;
//     console.log('details', details);
//     // const data2 = await db.collection('siva').insertOne();
//     // console.log('value', value);
//   } catch (err) {
//     console.log('error', err);
//   }
// };

const findWithEmail = async (req, res, next) => {
  const db = await mongoDB();
  const details = req.body.data.list;
  console.log('details', details);

  details.map(async (e) => {
    console.log('element', e);

    const find = await db
      .collection('Login')
      .findOne({ email: e.email }, { projection: { GUID: 1 } });
    console.log('find', find);
    // const email = e.email;
    const { email } = e;
    const { GUID } = find;
    const data = { email, GUID };
    console.log('data', data);
    // let siva = [];
    // siva.push(data);
    // console.log('array', siva);
    // console.log('EMAIL,GUID', email, GUID);

    // await db.collection('siva').insertOne(siva);
  });

  res.status(200).json({ status: 200 });
};

module.exports = {
  insertdetails,
  findOne,
  insertNew,
  updating,
  aggregation,
  deleting,
  signUp,
  signIn,
  findWithEmail,
  // find,.
};

// const aggpipe = [
//   {
//     $match: filter,
//   },
//   {
//     $project: {
//       about: {
//         $slice: [about, 0, 1],
//       },
//     },
//   },
// ];

// const data = await getmongoDB.collection("order").aggregate(aggpipe).toArray()[
//   { $project: { StudentScores: { $slice: ["$StudentScores", 0, 1] } } }
// ];

// const aggPipe = [
//   {
//     $match: filter,
//   },
//   {
//     $unwind: {
//       path: "$version",
//       preserveNullAndEmptyArrays: true,
//     },
//   },
//   {
//     $project: {
//       // _id: 0,
//       "version.versionid": 1,
//       "version.title": 1,
//     },
//   },
// ];
// const data = await mongoDB
//   .collection("RFQTemplate")
//   .aggregate(aggPipe)
//   .toArray();
// console.log("aggregate", aggPipe);

// ,{"email":"ab2@gaeprojects.com"}

// const total = data.forEach((el) => {
//   console.log('el', el);
// });
// console.log('total', total);

// console.log('findData', find);
// console.log('DATA', [{ details: e.email }, { details: find.GUID }]);
// const last = [{ details: e.email }, { details: find.GUID }];
// console.log('last', last.concat(last));
// return [{ details: details.email }, { details: details.GUID }];

// return { email: e.email, GUID: GUID };
// await db.collection('siva').insertOne(total);

// let array = [];
// array.push({ details: details.email, GUID });
// console.log('array', array);
