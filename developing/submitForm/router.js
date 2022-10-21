const express = require("express");
const { insert, findall, findOne } = require("./controller");
const router = express.Router();

router.post("/insert/test", express.json({ limit: "15kb" }), insert);
router.post("/findall/test", express.json({ limit: "15kb" }), findall);
router.post("/findone/test", express.json({ limit: "15kb" }), findOne);

module.exports = router;
