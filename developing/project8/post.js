const pool = require('./postgres');
const mongoDB = require('./mongoDB');
const model = require('./model');

const createOrder = async (req, res, next) => {
  // console.log('REQUEST', req.headers);
  try {
    const details = req.body.data;
    // console.log('details', details);
    const { title, items, buyeraddress, commontax } = details;

    console.log('details', title, items, buyeraddress, commontax);
    const db = await mongoDB();
    const client = await pool.connect();
    const data = await client.query('call order_procedure($1,$2)', [
      details,
      null,
    ]);

    const routeid = data.rows[0]._route_id;
    console.log('ID', routeid);

    const pgData = await JSON.parse(
      JSON.stringify(
        await model.routes.findOne({
          where: {
            routeid,
          },
          include: [
            {
              model: model.items,
              attributes: ['itemname', 'price', 'quantity', 'item_id'],
              as: 'items',
              include: [
                {
                  model: model.itemtax,
                  attributes: ['name', 'rate', 'taxid'],
                  as: 'itemtax',
                },
              ],
            },
            {
              model: model.buyeraddress,
              attributes: ['address', 'company', 'contactname', 'addid'],
              as: 'buyeraddress',
            },
            {
              model: model.commontax,
              attributes: ['name', 'rate', 'taxid'],
              as: 'commontax',
            },
            {
              model: model.tandc,
              attributes: ['tandcid', 'tandc'],
              as: 'tandc',
            },
          ],
          attributes: ['title', 'createdat', 'routeid', 'autoref', 'refno'],
        })
      )
    );

    console.log('data2@@@', pgData);
    const mongoInsert = await db
      .collection('pg')
      .insertOne({ ...pgData, createdat: new Date(pgData.createdat) });
    console.log('data3', mongoInsert);
    const id = mongoInsert.insertedId;
    console.log(id);
    res.status(200).json({
      status: 201,
      data: routeid,
      id,
      createdAt: pgData.createdat,
    });
  } catch (err) {
    console.log('error', err);
  }
};

const addItemsWithModel = async (req, res, next) => {
  const details = req.body.data;
  const { title, items } = details;
  const { itemname, quantity, price } = items;
  // const db = await mongoDB();
  // const client = await pool.connect();
  console.log('details', details);
  try {
    const data = await JSON.parse(
      JSON.stringify(
        await model.routes.create({
          title,
        })
      )
    );
    console.log('data', data);
    const { routeid } = data;

    const data2 = await JSON.parse(
      JSON.stringify(
        await model.items.create({
          routeid,
          itemname,
          quantity,
          price,
        })
      )
    );

    console.log('data2', data2);
  } catch (err) {
    console.log('error', err);
  }
};

module.exports = { createOrder };
