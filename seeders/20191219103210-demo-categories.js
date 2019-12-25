'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('categories', [{
      name: 'Programming',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Technology',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'English',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mystery',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Culture',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('categories', null, {});
  }
};
