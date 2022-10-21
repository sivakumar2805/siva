const model = require("./model2");
const mongoDB = require("./mongoDB");

const insertOrder = async (req, res, next) => {
  const details = req.body.data;
  console.log(details);
  const { name, email } = details;
  const db = await mongoDB();

  const data = JSON.parse(
    JSON.stringify(
      await model.order.create({
        name,
        email,
      })
    )
  );

  const { order_id } = data;
  console.log("orderid", order_id);

  const findOneWithId = JSON.parse(
    JSON.stringify(
      await model.order.findOne({
        where: {
          order_id,
        },
        attributes: ["name", "email"],
        as: "order",
      })
    )
  );

  const insertWithMongo = await db.collection("order").insertOne(findOneWithId);
  console.log(insertWithMongo);
  res.status(201).json({ status: 201, data });
};

module.exports = { insertOrder };
