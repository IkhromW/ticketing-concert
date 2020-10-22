'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerConcert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CustomerConcert.init({
    CustomerId: DataTypes.INTEGER,
    ConcertId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomerConcert',
  });
  return CustomerConcert;
};