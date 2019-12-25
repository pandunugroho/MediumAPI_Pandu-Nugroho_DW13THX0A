'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('comments', [
      {
        is_published: true,
        is_archived: false,
        article_id: 1,
        user_id: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_published: true,
        is_archived: false,
        article_id: 1,
        user_id: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        is_published: true,
        is_archived: false,
        article_id: 1,
        user_id: 1,
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis commodo hendrerit. Nullam mattis massa est, a luctus nisi sodales vitae.',
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
     return queryInterface.bulkDelete('comments', null, {});
  }
};
