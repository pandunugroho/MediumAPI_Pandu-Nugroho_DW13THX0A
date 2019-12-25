'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    slug: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function(models) {
    // associations can be defined here
    articles.belongsTo(models.categories, {
      foreignKey: "category_id",
      as: "categories",
      sourceKey: "id"
    });
    articles.belongsTo(models.users, {
      foreignKey: "author_id",
      sourceKey: "id"
    });
    articles.hasMany(models.comments, {
      foreignKey: "comment",
      sourceKey: "id"
    });
  };
  return articles;
};