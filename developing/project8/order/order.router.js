const express = require('express');
const { newOrder, orderList, orderById, deleteOrder } = require('./order');
const router = express.Router();

router.post('/order/new', express.json({ limit: '15kb' }), newOrder);
router.post('/order/list', express.json({ limit: '15kb' }), orderList);
router.post('/order/view', express.json({ limit: '15kb' }), orderById);
router.post('/order/delete', express.json({ limit: '15kb' }), deleteOrder);

module.exports = router;
