const sequelize = require("./sequelize");
const { Sequelize, DataTypes, Model, literal } = require("sequelize");

const order = sequelize.define("ordertable", {
  order_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = { order };
