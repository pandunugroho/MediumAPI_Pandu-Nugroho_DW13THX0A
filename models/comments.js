'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  comments.associate = function(models) {
    // associations can be defined here
  };
  return comments;
};