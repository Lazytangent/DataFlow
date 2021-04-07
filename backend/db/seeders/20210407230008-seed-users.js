'use strict';
const data = require("../seeder-content/users.json");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [];
    for (const user of data) {
      users.push(user);
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {
      truncate: true,
      restartIdentity: true,
    });
  }
};
