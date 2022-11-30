const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

const apiRoutes = require('./homeRoutes.js');
router.use('/homeRoutes', apiRoutes);

module.exports = router;
