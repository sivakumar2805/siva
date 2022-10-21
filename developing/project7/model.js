const sequelize = require("./sequelize");
const { Sequelize, DataTypes, Model, literal } = require("sequelize");

const customer = sequelize.define("customer", {
  customerid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customername: Sequelize.STRING,
  age: Sequelize.INTEGER,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
});

const products = sequelize.define("products", {
  productid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerid: {
    type: Sequelize.INTEGER,
    references: {
      model: customer,
      key: "customerid",
    },
  },
  orderedproducts: Sequelize.STRING,
});

const orderDetail = sequelize.define("orderdetail", {
  orderid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerid: {
    type: Sequelize.INTEGER,
    references: {
      model: customer,
      key: "customerid",
    },
  },
  orderdetails: Sequelize.STRING,
});

const shipDetails = sequelize.define("shipdetails", {
  shipid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerid: {
    type: Sequelize.INTEGER,
    references: {
      model: customer,
      key: "customerid",
    },
  },

  shipname: Sequelize.STRING,
  shipcountry: Sequelize.STRING,
});

customer.hasMany(products, {
  as: "products",
  foreignKey: "customerid",
});

customer.hasMany(orderDetail, {
  as: "orderdetail",
  foreignKey: "customerid",
});

customer.hasOne(shipDetails, {
  as: "shipdetails",
  foreignKey: "customerid",
});
products.belongsTo(customer, {
  foreignKey: "customerid",
  targetKey: "customerid",
});

orderDetail.belongsTo(customer, {
  foreignKey: "customerid",
  targetKey: "customerid",
});

shipDetails.belongsTo(customer, {
  foreignKey: "customerid",
  targetKey: "customerid",
});

module.exports = {
  customer,
  products,
  orderDetail,
  shipDetails,
};
