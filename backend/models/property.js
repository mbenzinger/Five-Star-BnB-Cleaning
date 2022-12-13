'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

<<<<<<< HEAD
  class Property extends Model {


    // static associate({ Owner }) {
    //   Place.hasOne(Owner, { foreignKey: 'owner_id', as: 'owner' })
    // }

  };

  Property.init({
    property_id: {
=======
  class Place extends Model {


    static associate({ }) {
      
    }

  };

  Place.init({
    placeId: {
>>>>>>> 63e1a51ebc4fa86ded8d0ce6061b611e2f062fda
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
<<<<<<< HEAD
    property_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    square_feet: DataTypes.NUMBER,
=======
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    footage: DataTypes.STRING,
>>>>>>> 63e1a51ebc4fa86ded8d0ce6061b611e2f062fda
    pic: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
<<<<<<< HEAD
    modelName: 'Property',
  });
  return Property;
=======
    modelName: 'Place',
  });
  return Place;
>>>>>>> 63e1a51ebc4fa86ded8d0ce6061b611e2f062fda
};