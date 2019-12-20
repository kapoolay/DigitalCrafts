'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    album.hasMany(models.song, {
      as: 'songs',
      foreignKey: 'album_id'
    })
  };
  return album;
};