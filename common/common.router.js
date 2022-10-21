const express = require('express');
const { getCommonList } = require('./commonList');
const router = express.Router();

// router.post('/commonlist', express.json({ limit: '15kb' }), getCommonList);

module.exports = router;
