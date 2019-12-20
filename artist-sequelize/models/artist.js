'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {});
  artist.associate = function(models) {
    artist.hasMany(models.album, {
      as: 'albums',
      foreignKey: 'artist_id'
    })
  };
  return artist;
};