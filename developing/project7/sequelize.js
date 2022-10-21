const Sequelize = require("sequelize");

let sequelize;
sequelize = new Sequelize(
  "postgres://postgres:123456@192.168.1.10:5432/mydatabase",
  {
    dialectOptions: {
      decimalNumbers: false,
    },
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    pool: {
      max: 40,
    },
  }
);

module.exports = sequelize;
