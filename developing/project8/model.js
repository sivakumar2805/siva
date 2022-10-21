const sequelize = require('./sequelize');
const { Sequelize, Model, literal, DataTypes } = require('sequelize');

const routes = sequelize.define('routes', {
  routeid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  createdat: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  autoref: Sequelize.BOOLEAN,
  refno: Sequelize.STRING,
});

const items = sequelize.define('items', {
  item_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  routeid: {
    type: Sequelize.INTEGER,
    references: {
      model: routes,
      key: 'routeid',
    },
  },

  itemname: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
});

const itemtax = sequelize.define('itemtax', {
  taxid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: {
    type: Sequelize.INTEGER,
    references: {
      model: items,
      key: 'item_id',
    },
  },
  tableName: 'itemtax',
  name: Sequelize.STRING,
  rate: Sequelize.INTEGER,
});

const buyeraddress = sequelize.define('addressobj', {
  addid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  routeid: {
    type: Sequelize.INTEGER,
    references: {
      model: routes,
      key: 'routeid',
    },
  },
  address: Sequelize.STRING,
  company: Sequelize.STRING,
  contactname: Sequelize.STRING,
});

const commontax = sequelize.define('commontax', {
  taxid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  routeid: {
    type: Sequelize.INTEGER,
    references: {
      model: routes,
      as: 'routeid',
    },
  },
});

const tandc = sequelize.define('tandc', {
  tandcid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  routeid: {
    type: Sequelize.INTEGER,
    references: {
      model: routes,
      as: 'routeid',
    },
  },
  tandc: Sequelize.STRING,
});

const userprefix = sequelize.define('userprefix', {
  prefixid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  routeid: {
    type: Sequelize.INTEGER,
    references: {
      model: routes,
      as: 'routeid',
    },
  },
  prefix: Sequelize.STRING,
  count: Sequelize.INTEGER,
});

routes.hasMany(items, {
  as: 'items',
  foreignKey: 'routeid',
});

items.belongsTo(routes, {
  foreignKey: 'routeid',
  targetKey: 'routeid',
});

items.hasMany(itemtax, {
  as: 'itemtax',
  foreignKey: 'item_id',
});

itemtax.belongsTo(items, {
  foreignKey: 'item_id',
  targetKey: 'item_id',
});

routes.hasOne(buyeraddress, {
  as: 'buyeraddress',
  foreignKey: 'routeid',
});

buyeraddress.belongsTo(routes, {
  foreignKey: 'routeid',
  targetKey: 'routeid',
});

routes.hasMany(commontax, {
  as: 'commontax',
  foreignKey: 'routeid',
});

commontax.belongsTo(routes, {
  foreignKey: 'routeid',
  targetKey: 'routeid',
});

routes.hasMany(tandc, {
  as: 'tandc',
  foreignKey: 'routeid',
});

tandc.belongsTo(routes, {
  foreignKey: 'routeid',
  targetKey: 'routeid',
});

routes.hasOne(userprefix, {
  as: 'userprefix',
  foreignKey: 'routeid',
});

userprefix.belongsTo(routes, {
  foreignKey: 'routeid',
  targetKey: 'routeid',
});

module.exports = {
  routes,
  items,
  itemtax,
  buyeraddress,
  commontax,
  tandc,
  userprefix,
};
