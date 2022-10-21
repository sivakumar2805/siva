const express = require('express');
const router = express.Router();

const selfProfileRoutes = require('./selfprofile/self.router');

const uomRoutes = require('./uom/uom.router');

const taxRoutes = require('./tax/tax.router');

const companyRoutes = require('./company/company.router');

const uniqueRoutes = require('./unique/unique.router');
// const prefixRoutes = require('./prefix.router');

const commonListRoutes = require('./common/common.router');
const authRoutes = require('./testingAPI/testing.router');

// router.use('/api/v1', selfProfileRoutes);
router.use('/api/v1', uomRoutes);
router.use('/api/v1', taxRoutes);
router.use('/api/v1', companyRoutes);
router.use('/api/v1', uniqueRoutes);
router.use('/api/v1', commonListRoutes);
router.use('/api/v1', authRoutes);

module.exports = router;
