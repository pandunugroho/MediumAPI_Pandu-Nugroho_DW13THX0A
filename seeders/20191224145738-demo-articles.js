'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('articles', [
      {
        title: "The Liar's Honest Words",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
        category_id: 1,
        author_id: 1,
        is_published: true,
        is_archived: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Python Programming Language are Entering the Stage",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
        category_id: 1,
        author_id: 1,
        is_published: true,
        is_archived: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Coloring the World with Peace",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspmqDKUqM91ZDWUpqmSlcZcUbsBfy0u6Ek7-Webet6v-YfuG8&s",
        category_id: 1,
        author_id: 1,
        is_published: true,
        is_archived: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('articles', null, {});
  }
};
