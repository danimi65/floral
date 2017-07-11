'use strict';
module.exports = function(sequelize, DataTypes) {
  var Flower = sequelize.define('Flower', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Flower;
};