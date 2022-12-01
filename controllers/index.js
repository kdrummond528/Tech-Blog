const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

// const dashboardRoutes = require('./dashboardRoutes');
// router.use('/dashboard', dashboardRoutes);

module.exports = router;
