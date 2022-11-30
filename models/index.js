const User = require('./User');
const Comment = require('./Comment');

// posts will have many comments from many users
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE'
});

// comments will belong to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// posts will belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Comment, Post };
