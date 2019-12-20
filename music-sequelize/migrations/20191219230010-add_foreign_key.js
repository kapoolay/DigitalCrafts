'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('albums', ['artist_id'], {
      type: 'FOREIGN KEY',
      name: 'artists_id_fk',
      references: {
        table: 'artists',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('albums', 'artists_id_fk');
  }
};
