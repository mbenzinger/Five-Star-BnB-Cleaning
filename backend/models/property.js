'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Place extends Model {


    static associate({ }) {
      
    }

  };

  Place.init({
    placeId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    footage: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Place',
  });
  return Place;
};