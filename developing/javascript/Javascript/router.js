const express = require('express');
const router = express.Router();
const { findWithEmail } = require('./controller');

router.post('/findmap', express.json({ limit: '15kb' }), findWithEmail);

module.exports = router;
