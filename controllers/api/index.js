const router = require('express').Router();

const userRoutes = require('./user-routes.js');
router.use('/user', userRoutes);

const postRoutes = require('./post-routes');
router.use('/post', postRoutes);

const commentRoutes = require('./comment-routes');
router.use('/comment', commentRoutes);

module.exports = router;
