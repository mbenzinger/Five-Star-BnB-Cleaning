'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Property extends Model {


    static associate({ }) {
      
    }

  };

  Property.init({
    propertyId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    property_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    square_feet: DataTypes.NUMBER,

    name: DataTypes.STRING,
    city: DataTypes.STRING,
    footage: DataTypes.INT,
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Property',
  });
  return Property;
};