const express = require("express");
const {
  insert,
  findAll,
  findAllWithAgg,
  getCustomerById,
  findWithAgg,
  aggregation,
} = require("./controller");
const { insertOrder } = require("./controller2");
const router = express.Router();
const schemaValidator = require("./schemaValidator");
const validator = require("./validator");

router.post(
  "/user/insert/test",
  express.json({ limit: "15kb" }),
  schemaValidator(validator.insertValidation),
  insert
);

// router.post("/user/findall/test", express.json({ limit: "15kb" }), findAll);

router.post("/user/aggre/test", express.json({ limit: "15kb" }), findWithAgg);

router.post(
  "/user/findone/test",
  express.json({ limit: "15kb" }),
  getCustomerById
);

router.post("/insert/order/test", express.json({ limit: "15kb" }), insertOrder);
router.post(
  "/aggregate/order/test",
  express.json({ limit: "15kb" }),
  aggregation
);

module.exports = router;
