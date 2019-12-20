'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('artists', 'dob', Sequelize.DATE, {
      after: 'name'
   });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('artists', 'dob');
  }
};
