const sequelize = require('./sequelize');
const { Sequelize, Model, literal, DataTypes } = require('sequelize');

const customerProfile = sequelize.define('customer_profile', {
  customid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  email: Sequelize.STRING,
});

const custQualify = sequelize.define('cust_qualify', {
  qualifyid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customid: {
    type: Sequelize.INTEGER,
    references: {
      model: customerProfile,
      key: 'customid',
    },
  },
  qualification: Sequelize.STRING,
});

// const customerHobbies = sequelize.define("cust_hobbies", {
//   hobbyid: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   customid: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: customerProfile,
//       key: "customid",
//     },
//   },
//   hobby: Sequelize.STRING,
// });

customerProfile.hasMany(custQualify, {
  as: 'qualification',
  foreignKey: 'customid',
});

// customerProfile.hasMany(customerHobbies, {
//   as: "hobby",
//   foreignKey: "customid",
// });

custQualify.belongsTo(customerProfile, {
  foreignKey: 'customid',
  targetKey: 'customid',
});

// customerHobbies.belongsTo(customerProfile, {
//   foreignKey: "customid",
//   targetKey: "customid",
// });
