'use strict';
module.exports = (sequelize, DataTypes) => {
  const artists = sequelize.define('artists', {
    name: DataTypes.STRING
  }, {});
  artists.associate = function(models) {
    // associations can be defined here
  };
  return artists;
};