const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // unique: true,
            references: {
                // isEmail: true,
                key: "id",
                model: "User"
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                // len: [8],
                key: "id",
                model: "Post"
            },
        },
    },
    {
        //     hooks: {
        //       beforeCreate: async (newUserData) => {
        //         newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //         return newUserData;
        //       },
        //       beforeUpdate: async (updatedUserData) => {
        //         updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //         return updatedUserData;
        //       },
        //     },
        sequelize,
        // timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
    }
);

module.exports = Comment;
