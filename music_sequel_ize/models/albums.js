'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define('albums', {
    album_name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {});
  albums.associate = function(models) {
    // associations can be defined here
  };
  return albums;
};