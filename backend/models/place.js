'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Place extends Model {


    static associate({ Owner }) {
      Place.hasOne(Owner, { foreignKey: 'userId', as: 'owner' })
    }

  };

  Place.init({
    placeId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    squareFeet: DataTypes.NUMBER,
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Place',
  });
  return Place;
};