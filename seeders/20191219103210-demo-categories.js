'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('categories', [{
      name: 'John Doe',
      is_published: true,
      is_archived: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Amna Arc',
      is_published: true,
      is_archived: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Berril Barne',
      is_published: false,
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
