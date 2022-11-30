const User = require('./User');
const Comment = require('./Comment');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Comment, Post };
