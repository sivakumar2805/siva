const { ObjectId } = require("mongodb");
const model = require("./model");
const mongoDB = require("./mongoDB");

const insert = async (req, res, next) => {
  const body = req.body.data;
  console.log(body);
  const db = await mongoDB();

  const {
    customername,
    age,
    address,
    city,
    orderedproducts,
    orderdetails,
    shipname,
    shipcountry,
  } = body;
  try {
    const data = await JSON.parse(
      JSON.stringify(
        await model.customer.create({
          customername,
          age,
          address,
          city,
        })
      )
    );
    //   console.log("data", data);

    const { customerid } = data;
    console.log("customerrr", customerid);

    orderedproducts.forEach(async (pro) => {
      await model.products.create({
        customerid,
        orderedproducts: pro.productname,
      });
    });

    console.log("orderdetails", orderdetails);

    orderdetails.forEach(async (orders) => {
      await model.orderDetail.create({
        customerid,
        orderdetails: orders.orderedon,
      });
    });

    const data2 = await model.shipDetails.create({
      customerid,
      shipname,
      shipcountry,
    });

    //   const findone = async (req, res, next) => {
    // const body = req.body.data;
    const data3 = JSON.parse(
      JSON.stringify(
        await model.customer.findOne({
          where: {
            customerid,
          },

          include: [
            {
              model: model.products,
              attributes: [["orderedproducts", "productname"]],
              as: "products",
            },
            {
              model: model.orderDetail,
              attributes: [["orderdetails", "orderedon"]],
              as: "orderdetail",
            },
            {
              model: model.shipDetails,
              attributes: ["shipname", "shipcountry"],
              as: "shipdetails",
            },
          ],
          attributes: ["customername", "age", "address", "city"],
        })
      )
    );
    //   };

    await db.collection("order").insertOne(data3);

    res.status(201).json({ status: 201, data });
  } catch (err) {
    console.log("errrrrrr", err);
  }
};

const findWithAgg = async (req, res, next) => {
  const body = req.body.data;
  const { offset, pagesize } = body;
  const db = await mongoDB();
  const { id } = body;
  try {
    const filter = {
      _id: ObjectId(id),
    };

    const aggPipe = [
      {
        $match: filter,
      },
      {
        $project: {
          _id: 0,
          customername: 1,
          age: 1,
          city: 1,
        },
      },
      {
        $skip: offset ? offset : 0,
      },
      {
        $limit: pagesize > 0 ? pagesize : 5,
      },
    ];

    const data = await db.collection("order").aggregate(aggPipe).toArray();
    // const total = await db.collection("order").countDocuments(filter)

    console.log("dataaaaa", data);
    res.status(200).json({ status: 200, data });
  } catch (err) {
    console.log("errrrrror", err);
  }
};

const getCustomerById = async (req, res, next) => {
  const bodyData = req.body.data;
  const { id } = bodyData;
  const db = await mongoDB();
  const filter = {
    _id: ObjectId(id),
  };
  console.log("filterrrr", filter);

  const columns = {
    customername: 1,
  };
  console.log("colllll", columns);

  const data = await db
    .collection("order")
    .findOne(filter, { projection: columns });
  console.log("dataa", data);

  res.status(200).json({ status: 200, data });
};

const aggregation = async (req, res, next) => {
  const { id } = req.body.data;
  const db = await mongoDB();
  const filter = {
    _id: ObjectId(id),
  };
  const data = await db.collection("order").aggregate([
    { $match: filter },
    // { $group: { _id: "$customername", total: { $sum: "$total" } } },
    { $sort: { total: -1 } },
  ]);
  // console.log("data", data);
  res.status(200).json({ status: 200, data });
};

module.exports = { insert, findWithAgg, getCustomerById, aggregation };

// const data = await db
//   .collection("order")
//   .find({})
//   .skip(skip)
//   .limit(limit)
//   .toArray();

// const columns = {
//   _id: 0,
//   customername: 1,
//   address: 1,
// };

// const findAll = async (req, res, next) => {
//   const body = req.body.data;
//   const db = await mongoDB();
//   const { skip, limit } = body;
//   try {
//     const data = await db
//       .collection("order")
//       .find({})
//       .skip(skip)
//       .limit(limit)
//       .toArray();

//     console.log("dataaaaa", data);
//     res.status(200).json({ status: 200, data });
//   } catch (err) {
//     console.log("errrrrror", err);
//   }
// };
