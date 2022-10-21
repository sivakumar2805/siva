// const data = await mongoDB.collection("Template").insertOne({
//   createdby: GUID,
//   ...rfqTemplate,
//   createdat: new Date(),
// });
// console.log("dataaa", data.insertedId);
// res.status(201).json({ status: 201, data: data.insertedId });

// AddtoSet

// const { insertedId } = data;
// const rfqtemplateid = insertedId;
// console.log("rfqid", rfqtemplateid);
// mongoDB.collection("RFQTemplate").updateOne(
//   { _id: ObjectId(rfqtemplateid), createdby: GUID }

// Method:1
// {
//   $addToSet: {
//    ArrayObject(Field): {
//       versionid: versionid,
//       ...rfqTemplate,
//       createdat: new Date(),
//     },
//   },
// }

// Method:2
// { '$push': {ArrayObject(Field):  data } }
// );

// const filter = {
//   createdby: GUID,
// };

// const getColumns = {
//   rfqtemplateid: "$_id",
//   title: 1,
//   tandc: 1,
// };

// const data = await mongoDB
//   .collection("Template")
//   .find(filter, { projection: getColumns })
//   .skip(offset ? offset : 0)
//   .sort({ createdat: -1 })
//   .limit(pagesize > 0 ? pagesize : 5)
//   .toArray();

// const totalcount = await mongoDB
//   .collection("Template")
//   .find({ createdby: GUID }, { _id: 1 })
//   .count();

// res.status(200).json({
//   status: 200,
//   data,
//   totalcount,
//   offset: offset || 0,
//   pagesize: pagesize || 5,
// });

// const columns = {
//   _id: 0,
//   title: 1,
//   description: 1,
//   cdate: 1,
// };

// const data = await mongoDB
//   .collection("Template")
//   .findOne(filter, { projection: columns });
// console.log("data", data);
// res.status(200).json({ status: 200, data });

// const lastelement = [
//   {
//     $addFields: {
//       lastelem: {
//         $last: "$version",
//       },
//     },
//   },
//   {
//     $project: {
//       templatetitle: 1,
//       lastelem: 1,
//     },
//   },
// ];

// const lastelement = [
//   {
//     $addFields: {
//       lastelem: {
//         $last: "$version",
//       },
//     },
//   },
//   {
//     $project: {
//       templatetitle: 1,
//       lastelem: 1,
//     },
//   },
// ];
// console.log(lastelement);
const getRFQTemplateVersionsByTempId = async (req, res, next) => {
  const { GUID } = req;
  const mongoDB = await getMongoDB();
  const { rfqtemplateid } = req.body.data;
  console.log("id", rfqtemplateid);
  // const { offset } = req.body.data || 0;
  // const { pagesize } = req.body.data || 5;
  try {
    const filter = {
      _id: ObjectId(rfqtemplateid),
      // createdby: GUID,
    };

    console.log("filter", filter);

    const columns = {
      // rfqtemplateid: "$_id",
      // _id: 0,

      "version.title": 1,

      // templatetitle: 1,
    };

    console.log("columns", columns);

    const data = await mongoDB
      .collection("RFQTemplate")
      .find(filter, { projection: columns })
      // .skip(offset ? offset : 0)
      // .sort({ createdat: -1 })
      // .limit(pagesize > 0 ? pagesize : 5)
      .toArray();

    console.log("data...", data);

    const totalcount = await mongoDB
      .collection("RFQTemplate")
      .find({ createdby: GUID }, { _id: 1 })
      .count();

    res.status(200).json({
      status: 200,
      data: data,
      totalcount,
      // offset: offset || 0,
      // pagesize: pagesize || 5,
    });
  } catch (err) {
    console.log("error", err);
  }
};

///////////////////////////////////////////////////

db.collection.aggregate([
  {
    $group: {
      _id: "$_id",
      type: {
        $first: "$type",
      },
      properties: {
        $first: {
          _id: "$_id",
          name: "$properties.name",
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      data: "$$ROOT",
    },
  },
]);
