const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const homeRoutes = require('./api/homeRoutes');
router.use('/homeRoutes', apiRoutes);

const homeRoutes = require('./api/homeRoutes');
router.use('/homeRoutes', apiRoutes);

module.exports = router;
