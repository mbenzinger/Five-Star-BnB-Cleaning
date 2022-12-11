'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Property extends Model {


    // static associate({ Owner }) {
    //   Place.hasOne(Owner, { foreignKey: 'owner_id', as: 'owner' })
    // }

  };

  Property.init({
    property_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    property_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    square_feet: DataTypes.NUMBER,
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Property',
  });
  return Property;
};