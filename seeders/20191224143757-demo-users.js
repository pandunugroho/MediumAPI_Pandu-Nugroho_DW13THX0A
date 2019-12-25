'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('users', [
      {
        fullname: 'Pandu',
        username: 'ndoe',
        email: 'pandu@gmail.com',
        password: '1234',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: 'Jihn Doeloe',
        username: 'Jhinie',
        email: 'jin@gmail.com',
        password: '234',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        fullname: 'John Doe',
        username: 'Johnie',
        email: 'joni@gmail.com',
        password: '2341',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('users', null, {});
  }
};
