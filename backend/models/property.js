'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Property extends Model {


    //static associate({ Comment }) {
     // Property.hasMany(Comment, { foreignKey: 'property_id', as: 'comments' })
   // }

  };

  Property.init({
    propertyId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    cuisines: DataTypes.STRING,
    pic: DataTypes.STRING,
    founded: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Place',
  });
  return Place;
};